export default async function fetchDogBreed(breed) {
  try {
    const ENDPOINT = `https://dog.ceo/api/breed/${breed}/images/random/30`;
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return [data.message, null];
  } catch (error) {
    return [null, error];
  }
}
