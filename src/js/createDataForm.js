import { nanoid } from 'nanoid';
export function createDataForm(event) {
  const data = { id: nanoid() };
  new FormData(event.currentTarget).forEach((value, key) => {
    data[key] = value;
  });
  return data;
}
