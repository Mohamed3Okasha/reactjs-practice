export const SET_LANGUAGE = "SET_LANGUAGE";

export const changeLanguage = (payload) => {
  return {
    type: SET_LANGUAGE,
    payload,
  };
};
