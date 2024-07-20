export function setToLocalStorage(data) {
  const arr = JSON.parse(localStorage.getItem('obj')) || [];
  arr.push(data);
  localStorage.setItem('obj', JSON.stringify(arr));
}
