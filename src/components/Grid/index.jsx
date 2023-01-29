import "./style.css";
export default function ({ data }) {
  const [images, error] = data || null;
  return (
    <div className="main__grid">
      {images?.map((image, index) => (
        <div className="grid__item" key={`${image}-${index}`}>
          <img
            onLoad={(event) => event.target.classList.remove("hide")}
            className="item__image"
            src={image}
            alt={image}
          />
        </div>
      ))}
    </div>
  );
}
