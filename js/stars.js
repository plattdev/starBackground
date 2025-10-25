// Variables for star configuration
const numStars = 100
const redStars = 15
const blueStars = 5

//Wrap up the star creation code in a function that will be called every 3 seconds 
setInterval(() => {
    document.body.innerHTML = '' ////body does not require to have a getElementById, it is a direct property of document. innerHTML helps adding/removing content inside body, if ='' it removes all content

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div')
        star.classList.add('star', 'fade-in')
        document.body.appendChild(star)
        star.style.top = Math.random() * 100 + "dvh"
        star.style.left = Math.random() * 100 + "dvw"
        star.style.width = Math.random() * 2 + 1 + "px"
        star.style.height = star.style.width
    }

    for (let i = 0; i < redStars; i++) {
        const star = document.createElement('div')
        star.classList.add('redStar', 'fade-in')
        document.body.appendChild(star)
        star.style.top = Math.random() * 100 + "dvh"
        star.style.left = Math.random() * 100 + "dvw"
        star.style.width = Math.random() * 14 + 1 + "px"
        star.style.height = star.style.width;
    }

    for (let i = 0; i < blueStars; i++) {
        const star = document.createElement('div')
        star.classList.add('blueStar', 'fade-in')
        document.body.appendChild(star)
        star.style.top = Math.random() * 100 + "dvh"
        star.style.left = Math.random() * 100 + "dvw"
        star.style.width = Math.random() * 6 + 1 + "px"
        star.style.height = star.style.width
    }

    const starImg = document.createElement('img')
    starImg.src = 'img/pluto.avif'
    starImg.classList.add('starImage', 'fade-in')
    starImg.alt = 'Pluto Image'
    starImg.style.position = 'fixed'
    starImg.style.bottom = '10px'
    starImg.style.left = '10px'
    starImg.style.width = '200px'
    starImg.style.top = Math.random() * 100 + "dvh"
    starImg.style.left = Math.random() * 100 + "dvw"
    document.body.appendChild(starImg)
}, 3000);


//Create CSS properties in JS for body, inserted in HTML
document.body.style.margin = "0"
document.body.style.overflow = "hidden"
document.body.style.backgroundColor = "black"

