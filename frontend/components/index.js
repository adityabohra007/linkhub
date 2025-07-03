import React, { useEffect, useState } from "react";
import "./index.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { LinkInput } from "../../../components/LinkInput";
import { Button } from "../../../components/Button";
import {
  useLinkUpdateMutation,
  useLinkCreateMutation,
  useLinkQuery,
} from "../../../redux/api/linkApi";


// // function Link({ quote, index }) {
// //   return (
// //     <Draggable draggableId={quote.id} index={index}>
// //       {(provided) => (
// //         <QuoteItem
// //           ref={provided.innerRef}
// //           {...provided.draggableProps}
// //           {...provided.dragHandleProps}
// //         >
// //           {quote.content}
// //         </QuoteItem>
// //       )}
// //     </Draggable>
// //   );
// // }

// const LinkComponent = ({ provided, linkData }) => (
//   <ul
//     style={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
//     className="characters listData"
//     {...provided.droppableProps}
//     ref={provided.innerRef}
//   >
//     {linkData && linkData.length ? (
//       linkData.map((item, index) => {
//         return (
//           <Draggable key={item.id} draggableId={String(item.id)} index={index}>
//             {(provided) => (
//               <div
//                 ref={provided.innerRef}
//                 {...provided.draggableProps}
//                 {...provided.dragHandleProps}
//               >
//                 <h1 {...provided.dragHandleProps}>
//                   {item.title} {item.id}
//                 </h1>
//               </div>
//               // <li
//               //   ref={provided.innerRef}
//               //   {...provided.draggableProps}
//               //   {...provided.dragHandleProps}
//               // >
//               //   <LinkInput data={item} provided={provided}></LinkInput>
//               // </li>
//             )}
//           </Draggable>
//         );
//       })
//     ) : (
//       <div>There is no link added click on add link to add</div>
//     )}
//     {provided.placeholder}
//   </ul>
// );
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
// Convert Id to string with seperator
let getItems = (data) => {
  return data.map((k) => ({
    ...k,
    id: `id-` + String(k.id),
  }));
};
//
export const LinkSection = () => {
  const [linkState, setLinkState] = useState([]);
  // Fetch Data
  const {
    isLoading,
    isSuccess,
    isError,
    data: linkData,
    isFetching,
    refetch,
  } = useLinkQuery();
  // Add new link
  const [
    linkCreate,
    {
      isLoading: isCreateLoading,
      isFetching: isCreateFetching,
      isError: isCreateError,
      data: createData,
    },
  ] = useLinkCreateMutation();
  const [update, updateOption] = useLinkUpdateMutation();

  useEffect(() => {
    if (!isFetching && isSuccess) {
      setLinkState(getItems(linkData));
    }
  }, [isSuccess, isFetching]);

  const functionSelected = (method, id) => {
    setLinkState((prev) => {
      let updated = linkState.find((item) => item.id == id);
      if (updated.methods == undefined) {
        // If methods are not defined
        updated["methods"] = {};
      }
      if (updated.methods[method] == true)
        updated = { ...updated, methods: { [method]: false } };
      else updated = { ...updated, methods: { [method]: true } };

      return [...linkState.filter((item) => item.id != id), updated];
    });
  };
  const handleOnDragEnd = (result) => {
    // console.log(result);
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    console.info(
      "current",
      result.source.index,
      " dest",
      result.destination.index
    );
    update({
      id: result.draggableId.split("-")[1],
      body: { position: result.destination.index },
    });

    console.log(result);
    const link = reorder(
      linkState,
      result.source.index,
      result.destination.index
    );
    console.log(link, "new link");

    setLinkState(link);
  };

  if (isLoading && isFetching) return <div>Loading</div>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px 10px 10px 10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          title={"Add New Link"}
          // size={"auto"}
          onClick={() => {
            linkCreate();
          }}
        ></Button>
        <Button title={"External Link"} size={"auto"}></Button>
      </div>

      <div className="listDataWrapper" style={{ padding: 20 }}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {linkState.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <LinkInput
                          data={item}
                          provided={provided}
                          functionSelected={functionSelected}
                        ></LinkInput>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}

                {/* {item.} */}
              </div>

              // <LinkComponent
              //   provided={provided}
              //   linkData={linkData}
              // ></LinkComponent>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};
