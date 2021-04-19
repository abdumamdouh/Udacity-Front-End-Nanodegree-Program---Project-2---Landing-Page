
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


const a = document.getElementsByTagName('a');
console.log(a);

window.addEventListener("scroll" , () => {

    for(let section of sections){
        const reaction = section.getBoundingClientRect();
        if(reaction.top > 0 && reaction.top < 300){
            //section.classList.add('your-active-class');
            section.style.opacity = 1;
            
        }
        else {
            //section.classList.remove('your-active-class');
            section.style.opacity = 0.1;
        }
    }

})






// Set sections as active


