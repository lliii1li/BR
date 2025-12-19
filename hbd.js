document.addEventListener('click', function (e) {
  const env = document.getElementById('card');
  if (!env) return;
  if (e.target.closest('.envelope') && !env.classList.contains('open')) {
    env.classList.remove('new');
    env.classList.add('open');
  }
});
