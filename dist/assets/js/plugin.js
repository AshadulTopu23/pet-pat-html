import Lenis from 'lenis';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type';
import Odometer from 'odometer';
import Splitting from "splitting";
import GLightbox from 'glightbox';
import Choices from 'choices.js';

document.addEventListener("DOMContentLoaded", function () {

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({ smooth: true, duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize splitting
    Splitting();

    // Initialize Glightbox
    // GLightbox({
    //     selector: '.glightboxVideo'
    // });

    // Initialize Swipers
    const initSwiper = (selector, config) => {
        const element = document.querySelector(selector);
        if (element) {
            new Swiper(element, config);
        }
    };

    // initSwiper('.hero-swiper', {
    //     modules: [Autoplay, Parallax, Pagination],
    //     slidesPerView: 1,
    //     spaceBetween: 24,
    //     speed: 1000,
    //     autoplay: { delay: 60000, },
    //     parallax: true,
    //     loop: true,
    //     pagination: {
    //         el: ".hero-pagination",
    //         clickable: true,
    //     },
    // });


    // initSwiper('.service-swiper', {
    //     modules: [Autoplay, Navigation],
    //     slidesPerView: 1,
    //     spaceBetween: 16,
    //     loop: true,
    //     speed: 1000,
    //     autoplay: { delay: 6000, },
    //     navigation: { nextEl: '.service-next', prevEl: '.service-prev' },
    //     breakpoints: {
    //         480: { slidesPerView: 2 },
    //         768: { slidesPerView: 3 },
    //         1200: { slidesPerView: 4 },
    //         1600: { slidesPerView: 5 }
    //     }
    // });

    // initSwiper('.project-swiper', {
    //     modules: [Autoplay, Navigation],
    //     slidesPerView: 1,
    //     spaceBetween: 16,
    //     loop: true,
    //     speed: 1000,
    //     autoplay: { delay: 6000, },
    //     breakpoints: {
    //         480: { slidesPerView: 2 },
    //         768: { slidesPerView: 2.5 },
    //         991: { slidesPerView: 3 },
    //         1400: { slidesPerView: 4 }
    //     }
    // });

    initSwiper('.testimonial-swiper', {
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        speed: 1000,
        autoplay: { delay: 6000, },
        navigation: { nextEl: '.testimonial-next', prevEl: '.testimonial-prev' },
    });

    // initSwiper('.text-swiper', {
    //     modules: [Autoplay],
    //     slidesPerView: 'auto',
    //     spaceBetween: 24,
    //     loop: true,
    //     speed: 20000,
    //     autoplay: { delay: 1, },
    // });

    // topuDatePicker({
    //     inputSelector: '.dateInput',
    //     // prevIcon: '<<',
    //     // nextIcon: '>>',
    //     classes: {
    //         inputContainerClass: 'renovation-date-input-container',
    //         calendarContainerClass: 'renovation-date-container',
    //         calendarHeaderClass: 'renovation-date-header',
    //         calendarBodyClass: 'renovation-date-body',
    //         calendarWeekdaysClass: 'renovation-date-weekdays',
    //         calendarDatesClass: 'renovation-date-days'
    //     },
    //     controlPosition: false,
    //     closeOnOutsideClick: false
    // });


    // // Initialize and observe odometers
    // const initializeOdometer = (element) => {
    //     const odometerValue = element.getAttribute('data-odometer-final');
    //     const od = new Odometer({ el: element, value: 0, format: '(,ddd)', theme: 'default' });
    //     od.update(odometerValue);
    // };

    // const odometerObserver = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             initializeOdometer(entry.target);
    //             odometerObserver.unobserve(entry.target);
    //         }
    //     }, {
    //         threshold: 0.1 // Trigger when 10% of the element is visible
    //     });
    // });

    // document.querySelectorAll('.odometer').forEach(el => odometerObserver.observe(el));


    // Initialize choices
    const petType = document.getElementById('pet-type');
    if (petType) {
        new Choices(petType, {
            shouldSort: false,
        });
    }

    const serviceType = document.getElementById('service-type');
    if (serviceType) {
        new Choices(serviceType, {
            shouldSort: false,
        });
    }


    // gsap
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger,);

    // Blur animation
    gsap.utils.toArray(".section-blur").forEach(section => {
        gsap.set(section, { filter: "blur(10px)" });
        gsap.to(section, {
            filter: "blur(0px)",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top center",
                scrub: true
            }
        });
    });

    // Image reveal animation
    const revealAnimation = (selector, axis, percent, scale) => {
        gsap.utils.toArray(selector).forEach(revealItem => {
            const image = revealItem.querySelector("img");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: revealItem,
                    toggleActions: "play none none reverse",
                }
            });
            tl.set(revealItem, { autoAlpha: 1 })
                .from(revealItem, 1.5, { [`${axis}Percent`]: -percent, ease: Power2.out })
                .from(image, 1.5, { [`${axis}Percent`]: percent, scale, delay: -1.5, ease: Power2.out });
        });
    };

    revealAnimation(".reveal-left", 'x', 100, 1.3);
    revealAnimation(".reveal-bottom", 'y', 100, 1.3);

    // Title animation
    const splitAndAnimate = (selector, splitType, child, triggerStart, staggerDelay) => {
        gsap.utils.toArray(selector).forEach(title => {
            new SplitType(title, { types: splitType });
            const elements = title.querySelectorAll(`.${child}`);
            elements.forEach((el, index) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: `top ${triggerStart}%`,
                        end: "bottom 60%",
                        scrub: false,
                        toggleActions: "play none none reverse"
                    }
                }).from(el, {
                    duration: 0.8,
                    x: 70,
                    delay: index * staggerDelay,
                    autoAlpha: 0
                });
            });
        });
    };

    splitAndAnimate(".text-animation-line", "lines", "line", 90, 0.03);
    splitAndAnimate(".text-animation-word", "words", "word", 90, 0.01);

    // Select all elements with the class 'banner-element'
    const bannerElements = document.querySelectorAll('.banner-element');

    bannerElements.forEach(element => {
        let tween;

        if (element.classList.contains('elementLeft')) {
            tween = gsap.to(element, {
                left: '100%',
                ease: 'none'
            });
        } else if (element.classList.contains('elementRight')) {
            tween = gsap.to(element, {
                right: '100%',
                ease: 'none'
            });
        } else if (element.classList.contains('elementBottom')) {
            tween = gsap.to(element, {
                bottom: '100%',
                ease: 'none'
            });
        } else if (element.classList.contains('elementTop')) {
            tween = gsap.to(element, {
                top: '100%',
                ease: 'none'
            });
        } else if (element.classList.contains('rotateLeft')) {
            tween = gsap.to(element, {
                rotation: 45,
                ease: 'none'
            });
        } else if (element.classList.contains('rotateRight')) {
            tween = gsap.to(element, {
                rotation: -45,
                ease: 'none'
            });
        }

        if (tween) {
            ScrollTrigger.create({
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                animation: tween
            });
        }
    });
})