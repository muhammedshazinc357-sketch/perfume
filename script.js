const cartCount = document.getElementById('cartCount');
const toast = document.getElementById('toast');
let count = 0;
let toastTimer;
document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    toast.textContent = `${button.dataset.product} added to your bag`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  });
});
document.getElementById('cartButton').addEventListener('click', () => {
  toast.textContent = count ? `Your bag has ${count} item${count === 1 ? '' : 's'} (demo)` : 'Your bag is empty';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
});
document.getElementById('year').textContent = new Date().getFullYear();
