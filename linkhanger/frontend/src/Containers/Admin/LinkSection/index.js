import React, { useEffect, useState } from "react";
import "./index.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { LinkInput } from "../../../components/LinkInput";
import { linkActions } from "../../../redux/actions/link.action";
import { Button } from "../../../components/Button";
import {
  useLinkCreateMutation,
  useLinkQuery,
} from "../../../redux/api/linkApi";
import { MuiButton } from "../../../components/MuiButton";
import { Grid, Stack } from "@mui/material";

// function Link({ quote, index }) {
//   return (
//     <Draggable draggableId={quote.id} index={index}>
//       {(provided) => (
//         <QuoteItem
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//         >
//           {quote.content}
//         </QuoteItem>
//       )}
//     </Draggable>
//   );
// }

const LinkComponent = ({ provided, linkData }) => (
  <ul
    style={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
    className="characters listData"
    {...provided.droppableProps}
    ref={provided.innerRef}
  >
    {linkData && linkData.length ? (
      linkData.map((item, index) => {
        return (
          <Draggable key={item.id} draggableId={String(item.id)} index={index}>
            {(provided) => (
              <li
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <LinkInput data={item} provided={provided}></LinkInput>
              </li>
            )}
          </Draggable>
        );
      })
    ) : (
      <div>There is no link added click on add link to add</div>
    )}
    {provided.placeholder}
  </ul>
);
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const LinkSection = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    data: linkData,
    isFetching,
    refetch,
  } = useLinkQuery();
  const [
    linkCreate,
    {
      isLoading: isCreateLoading,
      isFetching: isCreateFetching,
      isError: isCreateError,
      data: createData,
    },
  ] = useLinkCreateMutation();

  const [state, setState] = useState();

  useEffect(() => {
    if (isSuccess) {
      let initial = {
        link: linkData.map((k) => {
          const custom = {
            id: `id` + String(k.id),
            content: k,
          };
          return custom;
        }),
      };
      setState({ link: initial });
    }
  }, [isSuccess]);

  function handleOnDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const link = reorder(
      state.link,
      result.source.index,
      result.destination.index
    );

    setState({ link });
  }
  if (isLoading && isFetching) return <div>Loading</div>;

  return (
    <Grid item xl={12} md={12}>
      <Stack direction={"row"} justifyContent="center">
        <Button
          title={"Add New Link"}
          size={"auto"}
          onClick={() => {
            linkCreate();
          }}
        ></Button>
        <Button title={"External Link"} size={"auto"}></Button>
      </Stack>

      <div className="listDataWrapper" style={{ padding: 20 }}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <LinkComponent
                provided={provided}
                linkData={linkData}
              ></LinkComponent>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Grid>
  );
};
