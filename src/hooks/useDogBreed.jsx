import { useState, useEffect } from "react";
import fetchDogBreed from "../utils/paginated_dog_breed";
export default function (breed) {
  const [dogImages, setDogImages] = useState([]);
  useEffect(() => {
    (async function () {
      const [data, error] = await fetchDogBreed(breed);
      setDogImages([data, error]);
    })();
  }, [breed]);
  return dogImages;
}
