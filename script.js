const navbar = document.querySelector(".navbar");
const btnToggle = document.querySelector('.btnToggle');


// au click on store la valeur de data-attribute (data-visible et aria-expanded) 
// dans la variable "active",
// selon si la valeur est "false" or "true", les class css s'activent 

btnToggle.addEventListener("click", () => {
    const active  = navbar.getAttribute("data-visible");
    if(active === "false"){
        navbar.setAttribute("data-visible", true);
        btnToggle.setAttribute("aria-expanded", true);
    }else{
        navbar.setAttribute("data-visible",false);
        btnToggle.setAttribute("aria-expanded", false);
    }
});
