import React, { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { AntSwitch } from "../Switch";
import { BsImage } from "react-icons/bs";
import { AiOutlineStar, AiOutlineCalendar } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { linkActions } from "../../redux/actions/link.action";
import { FiEdit2 } from "react-icons/fi";
import { useLinkUpdateMutation } from "../../redux/api/linkApi";
import StyledLinkInput from "./styled";

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
  useEffect(() => {
    setInitialData(props.data);
  }, [props]);
  useEffect(() => {
    if (inputEditing.title) titleRef.current.focus();
    if (inputEditing.url) urlRef.current.focus();
  }, [inputEditing]);
  return (
    <div>
      <StyledLinkInput>
        <div {...props.provided.dragHandleProps} className="dragHandle">
          <HiDotsVertical size={30} color={"gray"} />
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
                  trigger({
                    id: initialData.id,
                    body: { title: value },
                  });
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
                  onClick={() => {
                    setInputEditing({ ...inputEditing, title: true });
                  }}
                >
                  {initialData.title ? initialData.title : "Title"}
                </div>
                <FiEdit2
                  size={16}
                  color={"black"}
                  style={{ marginLeft: 5, cursor: "pointer" }}
                ></FiEdit2>
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
                    id: initialData.id,
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

            <div className="functionalityWrapper" style={{ paddingTop: 10 }}>
              <BsImage className="function"></BsImage>
              <AiOutlineStar className="function"></AiOutlineStar>
              <AiOutlineCalendar className="function"></AiOutlineCalendar>
              <BiLock className="function"></BiLock>
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
            <AntSwitch
              defaultChecked={initialData.is_live}
              onChange={(event) => {
                const { name, checked } = event.target;

                trigger({ id: initialData.id, body: { is_live: checked } });
              }}
            ></AntSwitch>
            <RiDeleteBinLine
              onClick={() => dispatch(linkActions.remove(initialData.id))}
            ></RiDeleteBinLine>
          </div>
        </div>
        {/* <img src={thumb} alt={`${name} Thumb`} /> */}
      </StyledLinkInput>
      {/* <div style={{ backgroundColor: "green" }}>Hello</div> */}
    </div>
  );
};
