
/**
 * Define Global Variables
 * 
*/

const navbar = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const fragment = document.createDocumentFragment();

// build the nav


for(let section of sections){
    let alink = document.createElement('a');
    alink.innerHTML = section.dataset.nav;
    let li = document.createElement('li').innerHTML = alink; 
    //li.classList.add('nav_li');  
    li.classList.add('menu__link');
    fragment.appendChild(li);
    alink.addEventListener("click", () => {
        section.scrollIntoView({behavior:"smooth"});
    });
}

//append the fragment into the UL

navbar.appendChild(fragment);

// Add class 'active' to section when near top of viewport






// Set sections as active


