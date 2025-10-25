// Variables for star configuration
const numStars = 100
const redStars = 15
const blueStars = 5

//Wrap up the star creation code in a function that will be called every 3 seconds 
setInterval(() => {
    document.body.innerHTML = '' // Clear existing stars before creating new ones

    //Construct new HTML elements from JS
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


    for (let i = 0; i < redStars; i++) { 
        const star = document.createElement('div') 
        star.classList.add('redStar') 
        document.body.appendChild(star)

        star.style.top = Math.random() * 100 + "dvh" 
        star.style.left = Math.random() * 100 + "dvw"

        //random size between 1 and 15 pixels
        star.style.width = Math.random() * 14 + 1 + "px"
        star.style.height = star.style.width 
    }


    for (let i = 0; i < blueStars; i++) { 
        const star = document.createElement('div') 
        star.classList.add('blueStar') 
        document.body.appendChild(star)

        star.style.top = Math.random() * 100 + "dvh" 
        star.style.left = Math.random() * 100 + "dvw"

        star.style.width = Math.random() * 6 + 1 + "px"
        star.style.height = star.style.width 
    }


    //Create from scratch an element in HTML: one img that links to a star image
    const starImg = document.createElement('img') // Create an img element
    starImg.src = 'img/pluto.avif' // Set the source of the image to the star image file
    starImg.classList.add('starImage') // Add a class for styling
    starImg.alt = 'Pluto Image'
    starImg.style.position = 'fixed' 
    starImg.style.bottom = '10px' // Position it absolutely
    starImg.style.left = '10px' // Position it absolutely
    starImg.style.width = '200px' // Set width

    starImg.style.top = Math.random() * 100 + "dvh" 
    starImg.style.left = Math.random() * 100 + "dvw"
    
    document.body.appendChild(starImg) // Append the image to the body of the HTML document


}, 3000); // Refresh stars every 3 seconds





//Create CSS properties in JS for body, inserted in HTML
document.body.style.margin = "0"
document.body.style.overflow = "hidden"
document.body.style.backgroundColor = "black"

