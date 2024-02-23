function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 140, // Adjust for fixed header
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.price_btn');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var sectionId = this.dataset.section;
            scrollToSection(sectionId);
        });
    });
});
