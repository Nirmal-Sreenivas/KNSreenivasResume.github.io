document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.click-box');
    
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const content = section.nextElementSibling;
            content.classList.toggle('hidden');
        });
    });
});
