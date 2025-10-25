// Variables for star configuration
const numStars = 100
const redStars = 5


// Everytime there is a call to stars.html, it will create a random white star background
for (let i = 0; i < numStars; i++) { 
    const star = document.createElement('div') // Create a phantom div element (since it is not explicitly added in the HTML) for each star
    star.classList.add('star') // Add the star class to each star div. This class will be styled in the CSS file where it will be defined a position becase we will use top and left properties to place the stars randomly
    document.body.appendChild(star) // Append each star div to the body of the HTML document
    
    // Random position for each star. Math.random() generates a number between 0 and 1. By multiplying it by 100, we get a number between 0 and 100. Adding "dvh" or "dvw" makes it a percentage of the viewport  
    star.style.top = Math.random() * 100 + "dvh" //vertical random position
    star.style.left = Math.random() * 100 + "dvw" //horizontal

    // Random size for each star between 1 and 3 pixels
    star.style.width = Math.random() * 2 + 1 + "px"
    star.style.height = star.style.width //height equal to width
}

// Everytime there is a call to stars.html, it will create a random red star background
for (let i = 0; i < redStars; i++) { 
    const star = document.createElement('div') 
    star.classList.add('redStar') 
    document.body.appendChild(star)

    star.style.top = Math.random() * 100 + "dvh" 
    star.style.left = Math.random() * 100 + "dvw"

    //random size between 1 and 7 pixels
    star.style.width = Math.random() * 6 + 1 + "px"
    star.style.height = star.style.width 
}






//crear en JS propiedades CSS para body, insertadas en HTML
document.body.style.margin = "0"
document.body.style.overflow = "hidden"
document.body.style.backgroundColor = "black"