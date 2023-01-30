import { linkActionTypes } from "../constants/link.constants";
export const linkActions = {
  add,
  remove,
  update,
};

function add() {
  console.log("adding");
  return { type: linkActionTypes.ADDNEWLINK };
}
function remove(id) {
  return { type: linkActionTypes.DELETELINK, id };
}
function update(data) {
  return { type: linkActionTypes.UPDATELINK, data };
}
