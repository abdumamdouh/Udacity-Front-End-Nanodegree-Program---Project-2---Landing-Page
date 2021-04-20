

// Define Global Variables

const navbar = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const fragment = document.createDocumentFragment();
const links = document.getElementsByTagName('a');



// build the nav and linking the anchor links into the sections


for(let section of sections){
    let alink = document.createElement('a');
    alink.innerHTML = section.dataset.nav;
    let li = document.createElement('li').innerHTML = alink;  
    li.classList.add('menu__link');
    fragment.appendChild(li);
    alink.addEventListener("click", () => {
        section.scrollIntoView({behavior:"smooth"});
    });
}

//append the fragment into the ul element 

navbar.appendChild(fragment);


//listening for scroll event and get the dimensions of the section 

window.addEventListener("scroll" , () => {

    for(let section of sections){
        const reaction = section.getBoundingClientRect();
        if(reaction.top > 0 && reaction.top < 300){

            for(let link of links){
                if( section.dataset.nav === link.innerHTML ){

                    //adding style for the links and the sections to be clear which section is being viewed while scrolling through the page.

                    link.style.cssText = "background: #333;color: #fff;transition: ease 0.3s all";
                    section.style.opacity = 1;
                    section.style.backgroundColor = "black";

                }
                else{

                    //returning the default style of the links 
                    link.style.cssText = "color: #000;background: #fff;";
                    
                }
            }
            
        }
        else {

            //adding oppacity styling to the section 
            section.style.opacity = 0.1;
        }
    }

})



