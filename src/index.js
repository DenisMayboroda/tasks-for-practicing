/**
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Delete</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 */
import { handlerTaskFormSubmit } from './js/handlerTaskFormSubmit';
import { refs } from './js/refs';

import { renderCards } from './js/renderCards';

renderCards();

refs.taskFormEl.addEventListener('submit', handlerTaskFormSubmit);

refs.taskListEl.addEventListener('click', deleteCard);

function deleteCard(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.target.closest('.task-list-item').remove();
}
