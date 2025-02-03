const initialState = {
  year: "",
  name: "Pokemon",
  page: 1,
  type: "",
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: string | number }
) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload };
    case "SET_YEAR":
      return { ...state, year: payload };
    case "SET_TYPE":
      return { ...state, type: payload };
    case "SET_PAGE":
      return { ...state, page: payload };
    default:
      return state;
  }
};
