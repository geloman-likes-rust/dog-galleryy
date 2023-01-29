import "./style.css";
import { useEffect, useRef } from "react";
export default function ({ imgURL, setHide, hidden }) {
  const downloadRef = useRef();
  return (
    <div
      onClick={(event) => {
        if (event.target.classList.contains("overlay")) {
          setHide(true);
        }
      }}
      className={`overlay ${hidden ? "close" : "open"}`}
    >
      <div className="pop-up">
        <div className="pop-up__button-wrapper">
          <button
            onClick={() => setHide(true)}
            className="pop-up__button pop-up__button--close"
          />
        </div>
        <div className="pop-up__image-wrapper">
          <img
            draggable={false}
            className="pop-up__image"
            src={imgURL}
            alt="dog"
          />
        </div>
        <div className="pop-up__button-wrapper">
          <button className="pop-up__button pop-up__button--download">
            download
          </button>
        </div>
      </div>
    </div>
  );
}
