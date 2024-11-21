document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.list-group-item').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "El arte no es lo que ves, sino lo que haces que otros vean." ,
       "El arte debe hacerte sentir algo, y no solo entenderlo." ,
        "El arte puede cambiar el mundo porque puede cambiar a las personas."
    ]

    let currentIndex = 0;
    const textElement = document.getElementById('carousel-text');

    textElement.textContent = texts[0];

    function changeText() {
        textElement.style.opacity = '0';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            textElement.textContent = texts[currentIndex];
            textElement.style.opacity = '1';
        }, 1000);
    }

    setInterval(changeText, 2000);
});