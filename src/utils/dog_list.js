export default async function DogList() {
  try {
    const ENDPOINT = "https://dog.ceo/api/breeds/list/all";
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return [Object.keys(data.message), null];
  } catch (error) {
    return [null, error];
  }
}
