import { useState } from "react";
import PopUp from "../Popup";
import "./style.css";
export default function ({ data }) {
  const [images, error] = data || null;
  const [downLoadImage, setDownLoadImage] = useState("");
  const [hidePopUp, setHidePopUp] = useState(true);
  return (
    <div className="main__grid">
      {images?.map((image, index) => (
        <div className="grid__item" key={`${image}-${index}`}>
          <img
            draggable={false}
            onClick={(event) => {
              setDownLoadImage(event.target.src);
              setHidePopUp(false);
            }}
            onLoad={(event) => event.target.classList.remove("hide")}
            className="item__image"
            src={image}
            alt={image}
          />
        </div>
      ))}
      <PopUp hidden={hidePopUp} setHide={setHidePopUp} imgURL={downLoadImage} />
    </div>
  );
}
