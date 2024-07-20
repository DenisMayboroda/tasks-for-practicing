import { createDataForm } from './createDataForm';
import { setToLocalStorage } from './localStorageApi';

export function handlerTaskFormSubmit(event) {
  event.preventDefault();
  const data = createDataForm(event);
  setToLocalStorage(data);
}
