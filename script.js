const toggleBtn = document.getElementById('toggleBtn');
const message = document.getElementById('message');

toggleBtn.addEventListener('click', () => {
  if (message.classList.contains('message-hidden')) {
    message.classList.remove('message-hidden');
    message.classList.add('message-visible');
    toggleBtn.textContent = 'Xatni yopish';
  } else {
    message.classList.remove('message-visible');
    message.classList.add('message-hidden');
    toggleBtn.textContent = 'Xatni ochish';
  }
});
