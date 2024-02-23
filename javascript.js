document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav_links a');
    

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const detailsMoreBtn = document.querySelector('.details-more-btn');
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementById('closeModal');

    detailsMoreBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}