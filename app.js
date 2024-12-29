let loader = document.querySelector(".loader"),
    body = document.querySelector("body")
window.addEventListener("load", () => {
    loader.classList.add("loader_active")
    let interval = setInterval(removeLoader, 300)

    function removeLoader() {
        body.removeChild(loader)
        clearInterval(interval)
    }

    AOS.init()

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        loop: true,
    })
})
