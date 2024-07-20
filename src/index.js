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

refs.taskFormEl.addEventListener('submit', handlerTaskFormSubmit);
