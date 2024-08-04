// preloader
// toggle mobile menu
// mobile menu functions
// accordion item
// Show current year on footer
// back to top

"use strict"

// preloader
// setTimeout(() => {
//     if (document.querySelector(".preloader")) {
//         document.querySelector(".preloader").style.display = "none"
//     }
// }, 1000);

document.addEventListener('DOMContentLoaded', () => {

    // scroll header 
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        window.onscroll = function () {
            let scrollPosition = window.pageYOffset;
            if (scrollPosition > headerHeight) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        }
    }

    // menu active class
    // const navLinks = document.querySelectorAll('.menu-link a');
    // const currentUrl = window.location.href.split(/[?#]/)[0];
    // if (navLinks) {
    //     navLinks.forEach(link => {
    //         if (link.href === currentUrl) {
    //             link.classList.add('active');
    //             // Add active class to the parent menu-item if it exists
    //             let parentMenuItem = link.closest('.menu-item');
    //             if (parentMenuItem) {
    //                 parentMenuItem.classList.add('active');
    //                 if (parentMenuItem.parentElement.closest(".menu-item")) {
    //                     parentMenuItem.parentElement.closest(".menu-item").classList.add('active')
    //                 }
    //             }
    //         }
    //     });
    // }

    // // toggle mobile menu
    // const menuToggleBtn = document.querySelector(".menu-toggle-btn");
    // const navbarArea = document.querySelector(".navbar-area");
    // if (menuToggleBtn && navbarArea) {
    //     menuToggleBtn.addEventListener("click", function () {
    //         navbarArea.classList.toggle("open");
    //     });
    // }
    // // outside click
    // if (menuToggleBtn && navbarArea) {
    //     document.addEventListener("click", function (event) {
    //         if (!menuToggleBtn.contains(event.target) && !navbarArea.contains(event.target)) {
    //             navbarArea.classList.remove("open");
    //         }
    //     });
    // }

    // // mobile menu functions
    // const mobileMenu = () => {
    //     if (window.matchMedia("(max-width: 991px)").matches) {
    //         const menuLinks = document.querySelectorAll(".menu-item button");
    //         menuLinks.forEach(function (link) {
    //             link.addEventListener("click", function () {
    //                 link.parentElement.classList.toggle("active");
    //             });
    //         });
    //     }
    // }

    // mobileMenu();
    // window.addEventListener("resize", function () {
    //     mobileMenu();
    // })


    // Select all elements with the class 'banner-element'
    var bannerElements = document.querySelectorAll('.banner-element');

    // Function to handle the scroll event
    function handleScroll() {
        var scrollTop = window.scrollY || window.pageYOffset;
        var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPosition = scrollTop / scrollHeight;

        var windowWidth = window.innerWidth;
        var rotatePosition = scrollPosition * 0.5 * windowWidth;
        var absPosition = scrollPosition * 1.5 * windowWidth;

        bannerElements.forEach(function (element) {
            if (element.classList.contains('left')) {
                element.style.transform = 'rotate(' + rotatePosition / 4 + 'deg)';
                element.style.left = absPosition + 'px';
            } else if (element.classList.contains('right')) {
                element.style.transform = 'rotate(' + -rotatePosition / 4 + 'deg)';
                element.style.right = absPosition + 'px';
            } else if (element.classList.contains('bottom')) {
                element.style.transform = 'rotate(' + -rotatePosition / 4 + 'deg)';
                element.style.bottom = absPosition + 'px';
            }
        });
    }

    // Add the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);


    // // accordion item
    // const accordionHeaders = document.querySelectorAll('.accordion-header');
    // accordionHeaders.forEach(header => {
    //     header.addEventListener('click', () => {
    //         const accordionContent = header.parentNode;
    //         accordionContent.classList.toggle('show');
    //         // Optionally, collapse other accordion sections
    //         const otherContents = document.querySelectorAll('.accordion-item');
    //         otherContents.forEach(content => {
    //             if (content !== accordionContent) {
    //                 content.classList.remove('show');
    //             }
    //         });
    //         // show initially
    //         if (accordionContent.classList.contains('show')) {
    //             header.querySelector('.accordion-icon').classList.add('rotate');
    //         } else {
    //             header.querySelector('.accordion-icon').classList.remove('rotate');
    //         }
    //     });
    // });


    // // progress bar
    // const progressBarWraps = document.querySelectorAll('.progress-bar-wrap');
    // const updateProgressBar = (progressBarWrap) => {
    //     const progressValueElement = progressBarWrap.querySelector('.progress-bar-inner').getAttribute('data-value');
    //     // console.log(progressValueElement);
    //     const numericValue = parseInt(progressValueElement.replace('%', ''), 10);

    //     const progressBarInner = progressBarWrap.querySelector('.progress-bar-inner');
    //     progressBarInner.style.width = numericValue + '%';
    // };
    // const ProgressObserver = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             updateProgressBar(entry.target);
    //             observer.unobserve(entry.target); // Stop observing once the animation is done
    //         }
    //     });
    // }, {
    //     threshold: 0.1 // Trigger when 10% of the element is visible
    // });
    // progressBarWraps.forEach(progressBarWrap => {
    //     ProgressObserver.observe(progressBarWrap);
    // });

    // // team social list active
    // const socialLists = document.querySelectorAll('.social-link-wrapper');
    // if (socialLists) {
    //     socialLists.forEach(socialList => {
    //         const socialBtn = socialList.querySelector(".social-btn");
    //         const socialItem = socialList.querySelector(".social-items");
    //         const icon = socialBtn.querySelector('i')

    //         socialBtn.addEventListener("click", function () {
    //             socialItem.classList.toggle("active");
    //             if (icon.classList.contains('ph-plus')) {
    //                 icon.classList.remove('ph-plus')
    //                 icon.classList.add('ph-minus')
    //             } else {
    //                 icon.classList.remove('ph-minus')
    //                 icon.classList.add('ph-plus')
    //             }
    //         })
    //     });
    // }

    // // radio focused
    // document.querySelectorAll('.package-input .input-radiobox').forEach(input => {
    //     input.addEventListener('click', function () {
    //         // Remove the 'focused' class from all .package-input elements
    //         document.querySelectorAll('.package-input').forEach(packageInput => {
    //             packageInput.classList.remove('focused');
    //         });

    //         // Add the 'focused' class to the closest .package-input of the clicked item
    //         this.closest('.package-input').classList.add('focused');
    //     });
    // });

    // // credit card form select
    // const creditCardForm = document.querySelector('.credit-card-form');
    // const creditCardInput = document.querySelector('.creditCardInput');
    // if (creditCardForm && creditCardInput) {
    //     if (creditCardInput.checked) {
    //         creditCardForm.classList.add('active');
    //     } else {
    //         creditCardForm.classList.remove('active');
    //     }
    //     document.addEventListener("click", function () {
    //         if (creditCardInput.checked) {
    //             creditCardForm.classList.add('active');
    //         } else {
    //             creditCardForm.classList.remove('active');
    //         }
    //     })
    // }
    // // Show current year on footer
    // const yearEl = document.querySelector(".currentYear");
    // if (yearEl) {
    //     yearEl.innerText = new Date().getFullYear();
    // }

    // // back to top
    // const backToTop = document.querySelector(".back-to-top")
    // if (backToTop) {
    //     window.addEventListener("scroll", function () {
    //         if (this.window.scrollY > 200) {
    //             backToTop.classList.add("show");
    //         } else {
    //             backToTop.classList.remove("show");
    //         }
    //     })

    //     backToTop.addEventListener("click", function () {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //         });
    //     })
    // }
});