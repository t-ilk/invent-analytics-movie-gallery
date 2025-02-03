export const setNameAction = (name: string) => {
  return {
    type: "SET_NAME",
    payload: name,
  };
};

export const setYearAction = (year: string) => {
  return {
    type: "SET_YEAR",
    payload: year,
  };
};

export const setTypeAction = (type: string) => {
  return {
    type: "SET_TYPE",
    payload: type,
  };
};

export const setPageAction = (page: number) => {
  return {
    type: "SET_PAGE",
    payload: page,
  };
};

export const resetAction = () => {
  return {
    type: "RESET",
  };
};
