document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const message = document.getElementById('message');

  openBtn.addEventListener('click', () => {
    message.classList.remove('hidden');
    message.classList.add('visible');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  });

  closeBtn.addEventListener('click', () => {
    message.classList.remove('visible');
    message.classList.add('hidden');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
  });
});
