import { createMarkup } from './createMarkup';
import { refs } from './refs';

export function renderCards() {
  const saveData = JSON.parse(localStorage.getItem('obj')) || [];
  const markup = saveData.map(createMarkup).join('');
  refs.taskListEl.insertAdjacentHTML('beforeend', markup);
}
