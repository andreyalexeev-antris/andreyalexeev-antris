// Простой JS-скрипт для демонстрации интерактива
const button = document.getElementById('clickBtn');
const counterDisplay = document.getElementById('counter');
let count = 0;

button.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    
    // Временный эффект вспышки при клике
    counterDisplay.style.transform = 'scale(1.2)';
    counterDisplay.style.transition = 'transform 0.1s';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 100);
});

// Логика для модального окна достижений
const lightbox = document.getElementById('photoLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.lightbox-close');

// Открытие при клике на кнопки в карточках
document.querySelectorAll('.btn-view').forEach(button => {
    button.addEventListener('click', (e) => {
        const imgSrc = e.target.getAttribute('data-full-img');
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    });
});

// Закрытие по крестику
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Закрытие при клике на оверлей (пустую область вокруг фото)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
