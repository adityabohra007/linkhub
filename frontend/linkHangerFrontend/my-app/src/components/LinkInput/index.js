import React, { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { AntSwitch } from "../Switch";
import { BsImage } from "react-icons/bs";
import { AiOutlineStar, AiOutlineCalendar } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { linkActions } from "../../features/actions/link.action";
import { FiEdit2 } from "react-icons/fi";
import { GrFormEdit } from "react-icons/gr";
import { PiDotsSixVertical } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import {
  useLinkDeleteMutation,
  useLinkUpdateMutation,
} from "./../../api/linkApi";
import StyledLinkInput from "./styled";
import { Button } from "../Button";
// import Tooltip from "@mui/material/Tooltip";

const MethodDetail = ({ method }) => {
  let redirect = (
    <>
      {" "}
      <p
        style={{
          textAlign: "center",
          margin: 0,
          background: "#b5b5b5",
          // color: "white",
        }}
      >
        Redirect
      </p>
      <div style={{ padding: 10 }}>
        <Button
          max={true}
          title={"Add New Link"}
          // size={"auto"}
          onClick={() => { }}
        ></Button>
      </div>
    </>
  );
  let lock = (
    <>
      {" "}
      <p
        style={{
          textAlign: "center",
          margin: 0,
          background: "#b5b5b5",
          // color: "white",
        }}
      >
        Lock
      </p>
      <div style={{ padding: 10 }}>
        <Button
          max={true}
          title={"Add New Link"}
          // size={"auto"}
          onClick={() => { }}
        ></Button>
      </div>
    </>
  );
  let thumbnail = (
    <>
      {" "}
      <p
        style={{
          textAlign: "center",
          margin: 0,
          background: "#b5b5b5",
          // color: "white",
        }}
      >
        Thumbnail
      </p>
      <div style={{ padding: 10 }}>
        <Button
          max={true}
          title={"Add New Link"}
          // size={"auto"}
          onClick={() => { }}
        ></Button>
      </div>
    </>
  );
  let prioritize = (
    <>
      {" "}
      <p
        style={{
          textAlign: "center",
          margin: 0,
          background: "#b5b5b5",
          // color: "white",
        }}
      >
        Prioritize
      </p>
      <div style={{ padding: 10 }}>
        <Button
          max={true}
          title={"Add New Link"}
          // size={"auto"}
          onClick={() => { }}
        ></Button>
      </div>
    </>
  );
  let schedule = (
    <>
      {" "}
      <p
        style={{
          textAlign: "center",
          margin: 0,
          background: "#b5b5b5",
          // color: "white",
        }}
      >
        Schedule
      </p>
      <div style={{ padding: 10 }}>
        <Button
          max={true}
          title={"Add New Link"}
          // size={"auto"}
          onClick={() => { }}
        ></Button>
      </div>
    </>
  );
  if (method?.Redirect == true)
    return <div style={{ background: "white" }}>{redirect}</div>;
  else if (method?.Lock == true)
    return <div style={{ background: "white" }}>{lock}</div>;
  else if (method?.Thumbnail === true)
    return <div style={{ background: "white" }}>{thumbnail}</div>;
  else if (method?.Prioritize == true)
    return <div style={{ background: "white" }}>{prioritize}</div>;
  else if (method?.Schedule == true)
    return <div style={{ background: "white" }}>{schedule}</div>;
};
export const LinkInput = (props) => {
  const dispatch = useDispatch();
  const [inputEditing, setInputEditing] = useState({
    title: false,
    url: false,
  });
  const [initialData, setInitialData] = useState(props.data);
  const titleRef = useRef(null);
  const urlRef = useRef(null);

  const [trigger, { isLoading, isError, isSuccess, error, data }] =
    useLinkUpdateMutation();

  const [deleteTrigger, deleteOption] = useLinkDeleteMutation();
  useEffect(() => {
    setInitialData(props.data);
  }, [props]);
  useEffect(() => {
    if (inputEditing.title) titleRef.current.focus();
    if (inputEditing.url) urlRef.current.focus();
    console.log('Edditinggif')
  }, [inputEditing]);
  if (!initialData) return <h1>Loading</h1>
  return (
    <div style={{ background: "white", marginBottom: 10 }} className="shadow-md rounded-2xl">
      <StyledLinkInput>
        <div className="dragHandle" {...props.listeners} {...props.attributes} style={{ cursor: 'grab' }}>
          <PiDotsSixVertical size={20} color={"gray"} />
        </div>

        <div className="rightSection">
          <div>
            {inputEditing.title ? (
              <input
                ref={titleRef}
                defaultValue={initialData.title}
                type={"text"}
                className="titleInput"
                onBlur={(event) => {
                  const { name, value } = event.target;
                  setInputEditing({ ...inputEditing, title: false });
                  console.log("id-log", initialData.id.split("-")[1]);
                  trigger({
                    id: initialData.id.split("-")[1],
                    body: { title: value },
                  });
                  document
                    .querySelector("iframe")
                    .contentWindow.location.reload();
                }}
              ></input>
            ) : (
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    cursor: "pointer",
                    fontFamily: "sans-serif",
                    fontSize: 16,
                  }}
                  onClick={(event) => {
                    event.stopPropagation()

                    console.log('Title Editing...')
                    setInputEditing({ ...inputEditing, title: true });
                  }}
                >
                  {initialData.title ? initialData.title : "Title"}
                </div>
                <MdOutlineEdit
                  size={20}
                  color={"black"}
                  style={{ marginLeft: 5, cursor: "pointer" }}
                ></MdOutlineEdit>
              </div>
            )}
            {inputEditing.url ? (
              <input
                ref={urlRef}
                defaultValue={initialData.url}
                onBlur={(event) => {
                  const { name, value } = event.target;
                  setInputEditing({ ...inputEditing, url: false });
                  trigger({
                    id: initialData.id.split("-")[1],
                    body: { url: value },
                  });
                }}
                type={"text"}
                className="titleInput"
                onChange={(event) => {
                  const { name, value } = event.target;
                  dispatch(
                    linkActions.update({ ...initialData, urlRef: value })
                  );
                }}
              ></input>
            ) : (
              <div style={{ display: "flex" }}>
                <div
                  style={{ cursor: "pointer", fontFamily: "sans-serif" }}
                  onClick={() => {
                    setInputEditing({ ...inputEditing, url: true });
                  }}
                >
                  {initialData.url ? initialData.url : "Url"}
                </div>
                <FiEdit2
                  size={16}
                  color={"black"}
                  style={{ marginLeft: 5, cursor: "pointer" }}
                ></FiEdit2>
              </div>
            )}

            <div className="functionalityWrapper flex" style={{ paddingTop: 10 }}>
              {/* <div> */}
              <FaDirections
                className={` function Redirect  ${initialData.methods?.Redirect && "active"
                  } `}
                size={30}
                onClick={() => {
                  props.functionSelected("Redirect", props.data.id);
                }}
              ></FaDirections>
              {/* </div> */}

              <BsImage
                className={`function Thumbnail  ${initialData.methods?.Thumbnail && "active"
                  } `}
                size={30}

                onClick={() => {
                  props.functionSelected("Thumbnail", props.data.id);
                }}
              ></BsImage>
              <AiOutlineStar
                className={`function Prioritize  ${initialData.methods?.Prioritize && "active"
                  } `}
                size={30}

                onClick={() => {
                  props.functionSelected("Prioritize", props.data.id);
                }}
              ></AiOutlineStar>
              <AiOutlineCalendar
                className={`function Schedule  ${initialData.methods?.Schedule && "active"
                  } `}
                size={30}

                onClick={() => {
                  props.functionSelected("Schedule", props.data.id);
                }}
              ></AiOutlineCalendar>
              <BiLock
                className={`function Lock  ${initialData.methods?.Lock && "active"
                  } `}
                size={30}

                onClick={() => {
                  props.functionSelected("Lock", props.data.id);
                }}
              ></BiLock>
            </div>
          </div>
          <div
            style={{
              paddingRight: 20,
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            {/* TODO */}
            <AntSwitch
              // sx={}
              // color={"red"}
              defaultChecked={initialData.is_live}
              onChange={(event) => {
                const { name, checked } = event.target;

                trigger({
                  id: initialData.id.split("-")[1],
                  body: { is_live: checked },
                });
                document
                  .querySelector("iframe")
                  .contentWindow.location.reload();
              }}
            ></AntSwitch>
            <RiDeleteBinLine
              onClick={
                () => {
                  console.log('delete trigger')
                  deleteTrigger({
                    id: initialData.id.split("-")[1],
                  });
                  // document
                  //   .querySelector("iframe")
                  //   .contentWindow.location.reload();
                }

                // dispatch(linkActions.remove(initialData.id.split("-")[1]))
              }
            ></RiDeleteBinLine>
          </div>
        </div>
        {/* <img src={thumb} alt={`${name} Thumb`} /> */}
      </StyledLinkInput>
      {/* Method Detail */}
      <MethodDetail method={initialData.methods}></MethodDetail>

      {/* <div style={{ backgroundColor: "green" }}>Hello</div> */}
    </div>
  );
};
