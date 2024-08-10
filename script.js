document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 1) {
                menu.classList.add('hidden')
            }

        })
    });
})

