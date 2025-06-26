import React, { useEffect, useState } from "react";
import "./index.css";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { LinkInput } from "../LinkInput";
// import { Button } from "../Button";
import { Button } from "flowbite-react";
import {
  useLinkUpdateMutation,
  useLinkCreateMutation,
  useLinkQuery,
} from "../../api/linkApi";

// import { DndContext } from '@dnd-kit/core';
import Draggable from './Draggable'
import { Droppable } from './Droppable'
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
import { FaPlus } from "react-icons/fa";
export const LinkSection = () => {
  const [linkState, setLinkState] = useState([]);
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      Go ahead, drag me.
    </Draggable>
  );
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
  }, [isSuccess, isFetching, linkData]);

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
  // const handleOnDragEnd = (result) => {
  //   // console.log(result);
  //   if (!result.destination) {
  //     return;
  //   }

  //   if (result.destination.index === result.source.index) {
  //     return;
  //   }
  //   console.info(
  //     "current",
  //     result.source.index,
  //     " dest",
  //     result.destination.index
  //   );
  //   update({
  //     id: result.draggableId.split("-")[1],
  //     body: { position: result.destination.index },
  //   });

  //   console.log(result);
  //   const link = reorder(
  //     linkState,
  //     result.source.index,
  //     result.destination.index
  //   );
  //   console.log(link, "new link");

  //   setLinkState(link);
  // };
  function handleOnDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
  if (isLoading || isFetching) return <div>Loading</div>;
  // if(isFetching)return <h5>Bomb</h5>

  return (
    <div
      className="sm:w-fit  sm:mx-auto flex"
      style={{
        // display: "flex",
        flexDirection: "column",
        // padding: "30px 30px 10px 30px",
      }}
    >
      {/* <div className="flex flex-row p-2 rounded-2xl bg-indigo-300 mx-5">
        <div>
          <p>
            <span className="text-wrap min-w-[70px] mt-">Your linkhub is live</span>
            <span>link.hub/adityabohra</span>
          </p>

        </div>
        <div>
          <Button title="Copy linkhub URL"></Button>
        </div>
      </div> */}
      <div className="px-2 pt-5" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          className="bg-[#8129d9] w-full py-4 rounded-3xl text-md mx-10"
          title={"Add New Link"}
          // size={"auto"}
          onClick={() => {
            linkCreate();
          }}
        ><FaPlus color="silver" className="mr-1" /> Add</Button>
        {/* <Button title={"External Link"} size={"auto"}></Button> */}
      </div>

      <div className="listDataWrapper" style={{ padding: 20 }}>
        {/* <DndContext onDragEnd={handleOnDragEnd}>
          {!parent ? draggable : null}
          <Droppable id="droppable">
            {parent === "droppable" ? draggable : 'Drop here'}
          </Droppable>
        </DndContext> */}
        {linkState.length && <App data={linkState} functionSelected={functionSelected} />}

        {/* <DragDropContext onDragEnd={handleOnDragEnd}>
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

                {item.}
              </div>

              // <LinkComponent
              //   provided={provided}
              //   linkData={linkData}
              // ></LinkComponent>
            )}
          </Droppable>
        </DragDropContext> */}
      </div>
    </div>
  );
};




// import React, {useState} from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';

function App({ data, functionSelected }) {
  const [items, setItems] = useState(data.map(item => item.id));
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map(item => <SortableItem key={item} id={item} data={data.find(i => i.id == item)} functionSelected={functionSelected} />)}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}