document.querySelectorAll('.language-title').forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('open');
    const section = title.nextElementSibling;
    section.classList.toggle('open');
  });
});
// Toggle interview sections
document.querySelectorAll('.language-title').forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('open');
    const section = title.nextElementSibling;
    section.classList.toggle('open');
  });
});

// Simple Lightbox for artworks
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';

    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    overlay.appendChild(fullImg);

    document.body.appendChild(overlay);
    overlay.style.display = 'flex';

    overlay.addEventListener('click', () => overlay.remove());
  });
});
