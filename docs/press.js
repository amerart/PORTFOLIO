document.querySelectorAll('.language-title').forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('open');
    const section = title.nextElementSibling;
    section.classList.toggle('open');
  });
});
