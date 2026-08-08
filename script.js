/*=========================================
  STICKY NAVBAR (SCROLL EFFECT)
=========================================*/

const navbar = document.querySelector("nav");

if (navbar) {

    function onScroll() {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", onScroll);

    onScroll();

}

/*=========================================
  STORY SECTION
=========================================*/

const storyItems = document.querySelectorAll(".story-screen");

if (storyItems.length) {

    const storyObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            const element = entry.target.children[0];

            if (!element) return;

            if (entry.isIntersecting) {

                element.style.transform = "scale(1)";
                element.style.opacity = "1";

            } else {

                element.style.transform = "scale(.7)";
                element.style.opacity = ".2";

            }

        });

    }, {
        threshold: 0.6
    });

    storyItems.forEach(item => {

        const element = item.children[0];

        if (!element) return;

        element.style.transition = "1s ease";
        element.style.transform = "scale(.7)";
        element.style.opacity = ".2";

        storyObserver.observe(item);

    });

}


/*=========================================
  SERVICES REVEAL
=========================================*/

const serviceItems = document.querySelectorAll(".service-item");

if (serviceItems.length) {

    const serviceObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.25
    });

    serviceItems.forEach(item => {

        serviceObserver.observe(item);

    });

}


/*=========================================
  MORE SERVICES SLIDER
=========================================*/




/*=========================================
  COMMON REVEAL ANIMATION
  (WHY + MACHINES + CONTACT)
=========================================*/

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.2
    });

    revealItems.forEach(item => {

        revealObserver.observe(item);

    });

}
/*=========================================
  WHATSAPP FEEDBACK FORM
  (Sends feedback to +91 98395 77007)
=========================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = contactForm.querySelector('input[placeholder="Name"]')?.value.trim() || "";
        const email = contactForm.querySelector('input[placeholder="E-mail"]')?.value.trim() || "";
        const phone = contactForm.querySelector('input[placeholder="Phone"]')?.value.trim() || "";
        const message = contactForm.querySelector('textarea')?.value.trim() || "";

        if (name === "" || phone === "") {

            alert("Please enter your Name and Phone Number.");

            return;

        }

        // OWNER WHATSAPP NUMBER (+91 98395 77007)
        const whatsappNumber = "919839577007";

        const text = `*🖨️ Bharat Printing Press*

*New Feedback Received*

━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}

━━━━━━━━━━━━━━━━━━━━

💬 *Message:*

"${message}"

━━━━━━━━━━━━━━━━━━━━

_Please contact me as soon as possible._

_Thank You! ❤️_`;

        // Open WhatsApp with the pre-filled message
        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
            "_blank"
        );

    });

}


/*=========================================
  WHATSAPP CONTACT FORM
=========================================*/

const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {

    whatsappForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name")?.value.trim() || "";
        const phone = document.getElementById("phone")?.value.trim() || "";
        const email = document.getElementById("email")?.value.trim() || "";
        const service = document.getElementById("service")?.value.trim() || "";
        const message = document.getElementById("message")?.value.trim() || "";

        if (name === "" || phone === "") {

            alert("Please enter your Name and Phone Number.");

            return;

        }

        // OWNER NUMBER
        const whatsappNumber = "916306908747";

        const text = `Hello Bharat Printing Press 👋

I would like to start a new project.

━━━━━━━━━━━━━━━

👤 Name : ${name}

📞 Phone : ${phone}

📧 Email : ${email}

🖨️ Service : ${service}

━━━━━━━━━━━━━━━

Requirement :

${message}

━━━━━━━━━━━━━━━

Please contact me regarding this project.

Thank You ❤️`;

        window.open(

            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,

            "_blank"

        );

    });

}


/*=========================================
  CONTACT INPUT ANIMATION
=========================================*/

const contactInputs = document.querySelectorAll(
    ".contact-form input, .contact-form textarea"
);

contactInputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement?.classList.add("active");

    });

    input.addEventListener("blur", () => {

        if (input.value === "") {

            input.parentElement?.classList.remove("active");

        }

    });

});


/*=========================================
  BUTTON RIPPLE EFFECT
=========================================*/

const contactButton = document.querySelector(".contact-form button");

if (contactButton) {

    contactButton.addEventListener("mouseenter", () => {

        contactButton.style.transform = "translateY(-4px) scale(1.02)";

    });

    contactButton.addEventListener("mouseleave", () => {

        contactButton.style.transform = "translateY(0) scale(1)";

    });

}


/*=========================================
  CONTACT SECTION REVEAL
=========================================*/

const contactElements = document.querySelectorAll(

    ".contact-left, .contact-form, .contact-info, .bottom-map"

);

if (contactElements.length) {

    const contactObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.2

    });

    contactElements.forEach(item => {

        contactObserver.observe(item);

    });

}
/*=========================================
  GOOGLE REVIEW SECTION
=========================================*/

const reviewsSlider = document.querySelector(".reviews-slider");
const sliderTrack = document.querySelector(".slider-track");
const ratingCounter = document.getElementById("ratingCounter");

if (reviewsSlider && sliderTrack) {

    /* Duplicate Cards (Infinite Slider) */

    sliderTrack.innerHTML += sliderTrack.innerHTML;

    /* Slider Variables */

    let position = 0;
    let speed = 0.8;
    let animationId;

    /* Slider Animation */

    function slideReviews() {

        position -= speed;

        const resetPoint = sliderTrack.scrollWidth / 2;

        if (Math.abs(position) >= resetPoint) {

            position = 0;

        }

        sliderTrack.style.transform = `translateX(${position}px)`;

        animationId = requestAnimationFrame(slideReviews);

    }

    slideReviews();

    /* Pause on Hover */

    reviewsSlider.addEventListener("mouseenter", () => {

        cancelAnimationFrame(animationId);

    });

    reviewsSlider.addEventListener("mouseleave", () => {

        slideReviews();

    });

    /*=========================
      DRAG SUPPORT
    =========================*/

    let isDragging = false;
    let startX = 0;
    let previousPosition = 0;

    reviewsSlider.addEventListener("mousedown", (e) => {

        isDragging = true;

        startX = e.pageX;

        previousPosition = position;

        cancelAnimationFrame(animationId);

        reviewsSlider.style.cursor = "grabbing";

    });

    window.addEventListener("mousemove", (e) => {

        if (!isDragging) return;

        const move = e.pageX - startX;

        position = previousPosition + move;

        sliderTrack.style.transform = `translateX(${position}px)`;

    });

    window.addEventListener("mouseup", () => {

        if (!isDragging) return;

        isDragging = false;

        reviewsSlider.style.cursor = "grab";

        slideReviews();

    });

    /*=========================
      TOUCH SUPPORT
    =========================*/

    let touchStart = 0;
    let touchPrevious = 0;

    reviewsSlider.addEventListener("touchstart", (e) => {

        cancelAnimationFrame(animationId);

        touchStart = e.touches[0].clientX;

        touchPrevious = position;

    });

    reviewsSlider.addEventListener("touchmove", (e) => {

        const move = e.touches[0].clientX - touchStart;

        position = touchPrevious + move;

        sliderTrack.style.transform = `translateX(${position}px)`;

    });

    reviewsSlider.addEventListener("touchend", () => {

        slideReviews();

    });

}

/*=========================================
  GOOGLE RATING COUNTER
=========================================*/

if (ratingCounter) {

    let value = 0;

    const target = 4.9;

    let started = false;

    function animateCounter() {

        if (value < target) {

            value += 0.1;

            ratingCounter.innerHTML = value.toFixed(1);

            requestAnimationFrame(animateCounter);

        } else {

            ratingCounter.innerHTML = "4.9";

        }

    }

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !started) {

                started = true;

                animateCounter();

            }

        });

    }, {

        threshold: 0.5

    });

    counterObserver.observe(ratingCounter);

}

/*=========================================
  REVIEW CARD REVEAL
=========================================*/

const reviewCards = document.querySelectorAll(".review-card");

if (reviewCards.length) {

    const reviewObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    reviewCards.forEach(card => {

        reviewObserver.observe(card);

    });

}
/*=========================================
MORE SERVICES AUTO SLIDER
=========================================*/


const serviceSlider = document.querySelector(".services-slider");

if (serviceSlider) {

    /* Wrap all cards in an inner track so only the track slides inside
       the fixed overflow:hidden slider (same as the Google Reviews slider).
       This is what makes the cards actually move across the screen. */
    const serviceTrack = document.createElement("div");
    serviceTrack.className = "services-track";
    while (serviceSlider.firstChild) {
        serviceTrack.appendChild(serviceSlider.firstChild);
    }
    serviceSlider.appendChild(serviceTrack);

    /* Duplicate Cards for a seamless infinite loop */
    serviceTrack.innerHTML += serviceTrack.innerHTML;

    /* Slider Variables */
    let servicePosition = 0;
    let serviceSpeed = 0.8;
    let serviceAnimation;

    /* Slider Animation */
    function moveServices() {
        servicePosition -= serviceSpeed;

        const resetPoint = serviceTrack.scrollWidth / 2;

        if (Math.abs(servicePosition) >= resetPoint) {
            servicePosition = 0;
        }

        serviceTrack.style.transform = `translateX(${servicePosition}px)`;
        serviceAnimation = requestAnimationFrame(moveServices);
    }

    moveServices();

    /* PAUSE ON HOVER */
    serviceSlider.addEventListener("mouseenter", () => {
        cancelAnimationFrame(serviceAnimation);
    });

    serviceSlider.addEventListener("mouseleave", () => {
        moveServices();
    });

    /* DRAG SUPPORT */
    let dragging = false;
    let startX = 0;
    let dragStartPosition = 0;

    serviceSlider.addEventListener("mousedown", (e) => {
        dragging = true;
        startX = e.pageX;
        dragStartPosition = servicePosition;
        cancelAnimationFrame(serviceAnimation);
        serviceSlider.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        const move = e.pageX - startX;
        servicePosition = dragStartPosition + move;
        serviceTrack.style.transform = `translateX(${servicePosition}px)`;
    });

    window.addEventListener("mouseup", () => {
        if (!dragging) return;
        dragging = false;
        serviceSlider.style.cursor = "grab";
        moveServices();
    });

    /* TOUCH SUPPORT */
    let touchStart = 0;
    let touchDragStart = 0;

    serviceSlider.addEventListener("touchstart", (e) => {
        cancelAnimationFrame(serviceAnimation);
        touchStart = e.touches[0].clientX;
        touchDragStart = servicePosition;
    });

    serviceSlider.addEventListener("touchmove", (e) => {
        const move = e.touches[0].clientX - touchStart;
        servicePosition = touchDragStart + move;
        serviceTrack.style.transform = `translateX(${servicePosition}px)`;
    });

    serviceSlider.addEventListener("touchend", () => {
        moveServices();
    });

}
/*==================================
        GALLERY LIGHTBOX
==================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.querySelector(".close-lightbox");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

let currentImage = 0;

/* Only wire up the lightbox if all required elements exist */
if (galleryImages.length && lightbox && lightboxImg && closeBtn && prevBtn && nextBtn) {

    galleryImages.forEach((img, index) => {

        img.addEventListener("click", () => {

            currentImage = index;

            showImage();

        });

    });

    function showImage() {

        lightbox.classList.add("active");

        document.body.classList.add("lightbox-open");

        lightboxImg.src = galleryImages[currentImage].src;

    }

    closeBtn.onclick = () => {

        lightbox.classList.remove("active");

        document.body.classList.remove("lightbox-open");

    };

    nextBtn.onclick = () => {

        currentImage++;

        if (currentImage >= galleryImages.length) {

            currentImage = 0;

        }

        showImage();

    };

    prevBtn.onclick = () => {

        currentImage--;

        if (currentImage < 0) {

            currentImage = galleryImages.length - 1;

        }

        showImage();

    };

    lightbox.onclick = (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.classList.remove("lightbox-open");

        }

    };

    document.addEventListener("keydown", (e) => {

        if (!lightbox.classList.contains("active")) return;

        if (e.key === "Escape") {

            lightbox.classList.remove("active");

            document.body.classList.remove("lightbox-open");

        }

        if (e.key === "ArrowRight") {

            nextBtn.click();

        }

        if (e.key === "ArrowLeft") {

            prevBtn.click();

        }

    });

}

/*=========================================
  HAMBURGER MENU (MOBILE NAV)
=========================================*/

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

if (hamburger && mobileNav) {

    hamburger.addEventListener("click", (e) => {

        e.stopPropagation();

        mobileNav.classList.toggle("open");

    });

    // Close menu when a link is clicked
    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {

        if (!mobileNav.classList.contains("open")) return;

        if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {

            mobileNav.classList.remove("open");

        }

    });

}
