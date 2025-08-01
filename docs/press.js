document.querySelectorAll('.language-title').forEach(title => {
  title.addEventListener('click', () => {
    const section = title.nextElementSibling;
    const isOpen = section.classList.contains('open');

    // Close all
    document.querySelectorAll('.language-section').forEach(sec => sec.classList.remove('open'));
    document.querySelectorAll('.language-title').forEach(t => t.classList.remove('open'));

    // Open clicked if it was not already open
    if (!isOpen) {
      section.classList.add('open');
      title.classList.add('open');
    }
  });
});
