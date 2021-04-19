
/**
 * Define Global Variables
 * 
*/

const navbar = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const fragment = document.createDocumentFragment();
const links = document.getElementsByTagName('a');

console.log(links);



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


window.addEventListener("scroll" , () => {

    for(let section of sections){
        const reaction = section.getBoundingClientRect();
        if(reaction.top > 0 && reaction.top < 300){

            for(let link of links){
                if( section.dataset.nav === link.innerHTML ){
                    link.style.cssText = "background: #333;color: #fff;transition: ease 0.3s all";
                    section.style.opacity = 1;
                }
                else{
                    link.style.cssText = "color: #000;background: #fff;";
                }
            }
            //section.classList.add('your-active-class');
            //section.style.opacity = 1;
            
        }
        else {
            //section.classList.remove('your-active-class');
            section.style.opacity = 0.1;
        }
    }

})






// Set sections as active


