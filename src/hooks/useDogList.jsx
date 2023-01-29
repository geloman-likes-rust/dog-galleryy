import DogList from "../utils/dog_list";
import { useState, useEffect } from "react";

export default function () {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function () {
      const [data, error] = await DogList();
      setData(data);
      setError(error);
    })();
  }, []);
  return [data, error];
}
