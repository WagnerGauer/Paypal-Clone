const dropdownItems = document.querySelectorAll(".dropdown-hover");

const dropdown = document.querySelectorAll(".nav-dropdown");



dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseover', () => {
        console.log(dropdownItem.lastElementChild.innerHTML);
        console.log("==========================================")
        console.log(dropdownItem.innerHTML)
        console.log("--------------------------------------------")
       dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
       document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
        })



        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            document.querySelector('.navbar-wrapper').style.background = 'none'
             })
     
});


   