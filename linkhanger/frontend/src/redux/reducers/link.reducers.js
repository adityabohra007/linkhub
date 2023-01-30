import { linkActionTypes } from "../constants/link.constants";
const randomId = () => Math.floor(Math.random() * 100);
const initialState = [
  {
    id: "1",
    title: "",
    url: "",
    is_live: false,
    function: {},
  },
];
export function link(state = initialState, action) {
  switch (action.type) {
    case linkActionTypes.UPDATELINK:
      const selection = state.filter((element) => element.id != action.data.id);

      return [...selection, action.data];
    case linkActionTypes.ADDNEWLINK:
      return [
        ...state,
        {
          id: String(randomId()),
          title: "",
          url: "",
          uploaded: false,
          function: {},
        },
      ];
      break;
    case linkActionTypes.DELETELINK:
      console.log(action.id, "fdfad");
      console.log(
        state.filter((element) => element.id != action.id),
        "fddddddd"
      );
      return state.filter((element) => element.id != action.id);
    default:
      return state;
  }
}
