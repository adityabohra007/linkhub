import styled from "styled-components";

const StyledLinkInput = styled.div`
  color: black;
  background-color: white;
  border-radius: 5px;
  display: flex;
  margin-bottom: 10px;
  /* min-width: 350px; */
  .dragHandle {
    border-right: 1px solid silver;
    padding: 5px;
    align-self: center;
  }
  .rightSection {
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
  .titleLabel {
    font-family: Red Hat Display;
    font-weight: 600;
  }
  input.titleInput:focus {
    border: 0px;
    outline: none;
  }
  .urlLabel {
    font-family: Red Hat Display;
    font-weight: 600;
    margin-top: 10px;
  }
  .urlInput {
    border: 0px;
  }
  .urlInput:focus {
    border: 0px;
    outline: none;
  }

  .functionalityWrapper {
    padding: 10px;
    .function {
      color: gray;
      margin-right: 5px;
      &::hover {
        color: black;
      }
    }
  }
`;

export default StyledLinkInput;
