/* 
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.header');
        const navToggle = document.querySelector('.nav-toggle');
        const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile navigation toggle
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });

        // Close mobile menu when a link is clicked
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenuOverlay.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });

        // Handle desktop nav links for the active class
        const desktopNavLinks = document.querySelectorAll('.nav-link');
        desktopNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                desktopNavLinks.forEach(navLink => navLink.classList.remove('active'));
                // Add active class to the clicked link
                e.target.classList.add('active');
            });
        });
    });


 */
/* document.getElementById("year").textContent = new Date().getFullYear(); */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    // Elementos nuevos para el submenú móvil
    const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
    const mobileDropdownWrapper = document.querySelector('.mobile-dropdown-wrapper');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile navigation toggle (Hamburguesa)
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    // NUEVO: Controlar el clic en "Servicios" dentro del móvil
    if (mobileDropdownToggle && mobileDropdownWrapper) {
        mobileDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que navegue o cierre el menú
            e.stopPropagation(); // Evita que el evento afecte a los cierres automáticos
            mobileDropdownWrapper.classList.toggle('open');
        });
    }

    // Close mobile menu when a normal link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // CORRECCIÓN: Si es el botón de Servicios, NO cierres el menú completo
            if (link.classList.contains('mobile-dropdown-toggle')) {
                return; 
            }
            
            navToggle.classList.remove('active');
            mobileMenuOverlay.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    // NUEVO: Cerrar menú móvil si hacen clic en un enlace INTERNO del submenú
    const mobileDropdownItems = document.querySelectorAll('.mobile-dropdown-item');
    mobileDropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenuOverlay.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    // Handle desktop nav links for the active class
        // Handle desktop nav links for the active class
    const desktopNavLinks = document.querySelectorAll('.nav-link');
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Si es el dropdown de escritorio, cancelamos el clic para que solo actúe el hover de CSS
            if (link.classList.contains('dropdown-toggle')) {
                if (window.innerWidth > 768) {
                    e.preventDefault();
                    return;
                }
            }

            desktopNavLinks.forEach(navLink => navLink.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

});
