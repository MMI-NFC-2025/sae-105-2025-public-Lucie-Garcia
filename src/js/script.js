//menu rectractable, l'interaction est visible partout depuis l'icon de menu burger mais voici l'accueil pour aller tester : https://savoufest.netlify.app

const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const logo = document.querySelector(".header__logo");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;

        toggle.ariaExpanded = isClosed;
        nav.hidden = isOpen;
        logo.classList.toggle("header__logo--extend", isClosed);
        page.classList.toggle("u-noscroll", isClosed);
    });
}

//Voici l'interaction suplémentaire de mon choix, lorsque l'on apuis sur "arrow" la page scroll vers le bas. 
// L'interaction se voit uniquemement sur l'accueil : https://savoufest.netlify.app
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


/* Voici les carousels présents dans le site */
//ils sont visible depuis cette page : https://savoufest.netlify.app/artistes
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

//voici une autre interaction suplémentaire ( supposer fonctionné ) elle doit permettre de retourné sur la page précedente, cepandant comme je n'arrive qu'a accedé a la page ou elle se situe (404) uniquement via un lien direct cette fonction ne peu fonctionné je n'ai pas pu la tester
//lien malgré tout (ne fonctionnera pas via ce lien du coup): https://savoufest.netlify.app/404
// /* Bouton pour retour arrière (404) */
const backBtn = document.querySelector("#backBtn");
if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.history.back();
    });
}