export function createDataForm(event) {
  const data = {};
  new FormData(event.currentTarget).forEach((value, key) => {
    data[key] = value;
  });
  return data;
}
