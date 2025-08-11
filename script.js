const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const message = document.getElementById('message');

openBtn.addEventListener('click', () => {
  message.classList.add('message-visible');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});

closeBtn.addEventListener('click', () => {
  message.classList.remove('message-visible');
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline-block';
});

