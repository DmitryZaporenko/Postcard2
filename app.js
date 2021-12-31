const slides = document.querySelectorAll('.slide')
const getBtn = document.querySelector('#get')
const screens = document.querySelectorAll('.screen')

getBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}