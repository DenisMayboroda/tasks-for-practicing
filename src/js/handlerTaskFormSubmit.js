import { createDataForm } from './createDataForm';
import { setToLocalStorage } from './localStorageApi';
import { refs } from './refs';
import { createMarkup } from './createMarkup';
export function handlerTaskFormSubmit(event) {
  event.preventDefault();
  const data = createDataForm(event);
  setToLocalStorage(data);
  refs.taskListEl.insertAdjacentHTML('beforeend', createMarkup(data));
}

