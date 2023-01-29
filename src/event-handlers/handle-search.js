export default (setFilter, data) => (event) => {
  console.log(event);
  console.log(data);
  setFilter(
    data.filter((item) => item.includes(event.target.value.toLocaleLowerCase()))
  );
};
