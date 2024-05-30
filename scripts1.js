// window.addEventListener('scroll', function() {
//     const box = document.getElementById('slideInBox');
//     const viewportHeight = window.innerHeight;
//     if (window.scrollY > viewportHeight) {
//         box.classList.add('visible');
//     } else {
//         box.classList.remove('visible');
//     }
// });




// window.addEventListener('scroll', function() {
//     const box = document.getElementById('slidefirst','slidesecond','slidethird','slidefourth');
//     const viewportHeight = window.innerHeight;
//     if (window.scrollY > viewportHeight) {
//         box.classList.add('visible');
//     } else {
//         box.classList.remove('visible');
//     }
// });


// window.addEventListener('scroll', function() {
//     const elements = document.querySelectorAll('#slidefirst, #slidesecond, #slidethird, #slidefourth');
//     const viewportHeight = window.innerHeight;
//     elements.forEach(element => {
//         if (window.scrollY > viewportHeight) {
//             element.classList.add('visible');
//         } else {
//             element.classList.remove('visible');
//         }
//     });
// });


window.addEventListener('scroll', function(e) {
    
    const elements = document.querySelectorAll('#slidefirst, #slidesecond');
    const viewportHeight = window.innerHeight;
    console.log(window.scrollY)

    elements.forEach(element => {
        console.log(window.scrollY)
        if (window.scrollY >= 300 && window.scrollY <= 500) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

window.addEventListener('scroll', function() {
    
    const elements = document.querySelectorAll('#slidethird, #slidefourth');
    const viewportHeight = window.innerHeight;
    console.log(window.scrollY)

    elements.forEach(element => {
        console.log(window.scrollY)
        if (window.scrollY >= 500 && window.scrollY <= 800) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});