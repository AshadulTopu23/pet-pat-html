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



    // Box Style 
    const targetBtn = document.querySelectorAll('.box-style')
    if (targetBtn) {
        targetBtn.forEach((element) => {
            element.addEventListener('mousemove', (e) => {
                const x = e.offsetX + 'px';
                const y = e.offsetY + 'px';
                element.style.setProperty('--x', x);
                element.style.setProperty('--y', y);
            })
        })
    }



    // Select all elements with the class 'banner-element'
    // var bannerElements = document.querySelectorAll('.banner-element');

    // // Function to handle the scroll event
    // function handleScroll() {
    //     let scrollTop = window.scrollY || window.pageYOffset;
    //     let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    //     let scrollPosition = scrollTop / scrollHeight;

    //     let windowWidth = window.innerWidth;
    //     let rotatePosition = scrollPosition * 0.5 * windowWidth;
    //     let absPosition = scrollPosition * 1.5 * windowWidth;

    //     bannerElements.forEach(function (element) {
    //         if (element.classList.contains('elementLeft')) {
    //             element.style.left = absPosition + 'px';
    //         } else if (element.classList.contains('elementRight')) {
    //             element.style.right = absPosition + 'px';
    //         } else if (element.classList.contains('elementBottom')) {
    //             element.style.bottom = absPosition + 'px';
    //         } else if (element.classList.contains('elementTop')) {
    //             element.style.top = absPosition + 'px';
    //         } else if (element.classList.contains('rotateLeft')) {
    //             element.style.transform = 'rotate(' + rotatePosition / 4 + 'deg)';
    //         } else if (element.classList.contains('rotateRight')) {
    //             element.style.transform = 'rotate(' + -rotatePosition / 4 + 'deg)';
    //         }
    //     });
    // }

    // // Add the scroll event listener to the window
    // window.addEventListener('scroll', handleScroll);


    // // Function to handle the scroll and intersection events
    // function handleBannerElements(entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // Calculate scroll position based on intersection ratio
    //             console.log('Element is intersecting:', entry.target);
    //             let scrollPosition = entry.intersectionRatio;
    //             console.log('Intersection ratio:', scrollPosition);


    //             let windowWidth = window.innerWidth;
    //             console.log('Window width:', windowWidth);
    //             let rotatePosition = scrollPosition * 0.5 * windowWidth;
    //             // console.log('Rotate position:', rotatePosition);
    //             let absPosition = scrollPosition * 1.5 * windowWidth;
    //             console.log('Abs position:', absPosition);
    //             // Apply styles based on classes
    //             // if (entry.target.classList.contains('elementLeft')) {
    //             //     entry.target.style.left = absPosition + 'px';
    //             // } else if (entry.target.classList.contains('elementRight')) {
    //             //     entry.target.style.right = absPosition + 'px';
    //             // } else if (entry.target.classList.contains('elementBottom')) {
    //             //     entry.target.style.bottom = absPosition + 'px';
    //             // } else if (entry.target.classList.contains('elementTop')) {
    //             //     entry.target.style.top = absPosition + 'px';
    //             // } else if (entry.target.classList.contains('rotateLeft')) {
    //             //     entry.target.style.transform = 'rotate(' + rotatePosition / 4 + 'deg)';
    //             // } else if (entry.target.classList.contains('rotateRight')) {
    //             //     entry.target.style.transform = 'rotate(' + -rotatePosition / 4 + 'deg)';
    //             // }
    //         }
    //     });
    // }

    // // Set up Intersection Observer options
    // let observerOptions = {
    //     threshold: [0, 0.25, 0.5, 0.75, 1] // Trigger at various points of intersection
    //     // threshold: 0.1
    // };

    // // Create an Intersection Observer instance
    // let observer = new IntersectionObserver(handleBannerElements, observerOptions);

    // // Select all elements with the class 'banner-element'
    // let bannerElements = document.querySelectorAll('.banner-element');

    // // Observe each banner element
    // bannerElements.forEach(function (element) {
    //     observer.observe(element);
    // });


    // // Select all elements with the class 'banner-element'
    // const bannerElements = document.querySelectorAll('.banner-element');

    // // Function to handle the animation
    // function animateElement(element, intersectionRatio) {
    //     let windowWidth = window.innerWidth;
    //     let scrollPosition = intersectionRatio;
    //     let rotatePosition = scrollPosition * 0.5 * windowWidth;
    //     let absPosition = scrollPosition * 1.5 * windowWidth;

    //     if (element.classList.contains('elementLeft')) {
    //         element.style.left = absPosition + 'px';
    //     } else if (element.classList.contains('elementRight')) {
    //         element.style.right = absPosition + 'px';
    //     } else if (element.classList.contains('elementBottom')) {
    //         element.style.bottom = absPosition + 'px';
    //     } else if (element.classList.contains('elementTop')) {
    //         element.style.top = absPosition + 'px';
    //     } else if (element.classList.contains('rotateLeft')) {
    //         element.style.transform = 'rotate(' + rotatePosition / 4 + 'deg)';
    //     } else if (element.classList.contains('rotateRight')) {
    //         element.style.transform = 'rotate(' + -rotatePosition / 4 + 'deg)';
    //     }
    // }

    // // Create an Intersection Observer
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             animateElement(entry.target, entry.intersectionRatio);
    //         }
    //     });
    // }, {
    //     threshold: new Array(101).fill(0).map((_, i) => i / 100)  // Create thresholds from 0 to 1 in 0.01 steps
    // });

    // // Observe each banner element
    // bannerElements.forEach(element => {
    //     observer.observe(element);
    // });


    // // Select all elements with the class 'banner-element'
    // const bannerElements = document.querySelectorAll('.banner-element');

    // // Function to handle the animation
    // function animateElement(element, scrollPosition) {
    //     let windowWidth = window.innerWidth;
    //     let rotatePosition = scrollPosition * 0.5 * windowWidth;
    //     let absPosition = scrollPosition * 1.5 * windowWidth;

    //     if (element.classList.contains('elementLeft')) {
    //         element.style.left = absPosition + 'px';
    //     } else if (element.classList.contains('elementRight')) {
    //         element.style.right = absPosition + 'px';
    //     } else if (element.classList.contains('elementBottom')) {
    //         element.style.bottom = absPosition + 'px';
    //     } else if (element.classList.contains('elementTop')) {
    //         element.style.top = absPosition + 'px';
    //     } else if (element.classList.contains('rotateLeft')) {
    //         element.style.transform = 'rotate(' + rotatePosition / 4 + 'deg)';
    //     } else if (element.classList.contains('rotateRight')) {
    //         element.style.transform = 'rotate(' + -rotatePosition / 4 + 'deg)';
    //     }
    // }

    // // Function to check if an element is in viewport
    // function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // // Function to handle scroll
    // function handleScroll() {
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    //     let scrollPosition = scrollTop / scrollHeight;

    //     bannerElements.forEach(element => {
    //         if (isInViewport(element)) {
    //             animateElement(element, scrollPosition);
    //         }
    //     });
    // }

    // // Add scroll event listener
    // window.addEventListener('scroll', handleScroll);

    // // Initial call to set positions
    // handleScroll();



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

    // Show current year on footer
    const yearEl = document.querySelector(".currentYear");
    if (yearEl) {
        yearEl.innerText = new Date().getFullYear();
    }

    // back to top
    const backToTop = document.querySelector(".back-to-top")
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (this.window.scrollY > 200) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        })

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    }
});