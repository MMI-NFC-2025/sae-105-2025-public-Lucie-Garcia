const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const logo = document.querySelector(".header__logo");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;

        // Mise à jour des attributs ARIA pour accessibilité
        toggle.ariaExpanded = isClosed;
        nav.hidden = isOpen;
        logo.classList.toggle("header__logo--extend", isClosed);
        page.classList.toggle("u-noscroll", isClosed);
    });
}

const ArrowBottom = document.querySelector(".arrow-bottom");
if (ArrowBottom) {
    ArrowBottom.addEventListener("click", () => {
        const target = window.scrollY + window.innerHeight * 0.7; // 50% de la hauteur visible
        window.scrollTo({
            top: target,
            behavior: "smooth",
        });
    });
}


/* Voici les carousels presents dans le site */
/* Carousel Vendredi */
const carouselVendredi = document.querySelector(".carousel__artiste__vendredi");
if (carouselVendredi) {
    const containerVendredi = carouselVendredi.querySelector(".carousel__artiste__vendredi__container");
    const btnPrevVendredi = carouselVendredi.querySelector(".carousel__artiste__vendredi__prev");
    const btnNextVendredi = carouselVendredi.querySelector(".carousel__artiste__vendredi__next");

    if (btnPrevVendredi && btnNextVendredi && containerVendredi) {
        const scrollAmount = 300;

        btnPrevVendredi.addEventListener("click", () => {
            containerVendredi.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        });

        btnNextVendredi.addEventListener("click", () => {
            containerVendredi.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        });
    }
}

/* Carousel Samedi */
const carouselSamedi = document.querySelector(".carousel__artiste__samedi");
if (carouselSamedi) {
    const containerSamedi = carouselSamedi.querySelector(".carousel__artiste__samedi__container");
    const btnPrevSamedi = carouselSamedi.querySelector(".carousel__artiste__samedi__prev");
    const btnNextSamedi = carouselSamedi.querySelector(".carousel__artiste__samedi__next");

    if (btnPrevSamedi && btnNextSamedi && containerSamedi) {
        const scrollAmount = 300;

        btnPrevSamedi.addEventListener("click", () => {
            containerSamedi.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        });

        btnNextSamedi.addEventListener("click", () => {
            containerSamedi.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        });
    }
}