import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../store/actions/language";
const LanguageSwitcher = () => {
  const lang = useSelector((state) => state.lang.currentLang);
  const dispatch = useDispatch();
  const changeCurrentLanguage = () => {
    dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
  };

  return (
    <>
      <div>
        <h3>Language Switcher Component</h3>
        <p>Current Language: {lang}</p>
        <button
          onClick={() => changeCurrentLanguage()}
          className="btn btn-info"
        >
          Change Language
        </button>
      </div>
    </>
  );
};

export default LanguageSwitcher;
