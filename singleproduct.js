const bigImg = document.getElementById('big-img')
const smallImages = document.querySelectorAll('.small-img')

smallImages[0].addEventListener('click', () => {
    bigImg.src = smallImages[0].src
})
smallImages[1].addEventListener('click', () => {
    bigImg.src = smallImages[1].src
})
smallImages[2].addEventListener('click', () => {
    bigImg.src = smallImages[2].src
})
smallImages[3].addEventListener('click', () => {
    bigImg.src = smallImages[3].src
})