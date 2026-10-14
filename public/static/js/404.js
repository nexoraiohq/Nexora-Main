/* Run now if the document is already parsed, otherwise wait for DOMContentLoaded. */
function nexoraReady(fn) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fn);
    } else {
        fn();
    }
}

nexoraReady(() => {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');

    if (!toggle || !menu || window.nexoraMobileMenuReady) return;

    window.nexoraMobileMenuReady = true;

    function setMenuState(isOpen) {
        menu.classList.toggle('open', isOpen);
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('menu-open', isOpen);
    }

    toggle.addEventListener('click', () => {
        setMenuState(!menu.classList.contains('open'));
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setMenuState(false);
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.classList.contains('open')) {
            setMenuState(false);
            toggle.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && menu.classList.contains('open')) {
            setMenuState(false);
        }
    });
});
