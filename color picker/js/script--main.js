const colors = document.getElementsByClassName("colors__color");

/*als laatste wil je geen
kleuren die te donker zijn (<=10%)
en geen kleuren die te kleur bevatten (<= 10%)
en teveel kleur (>=80%) bevatten.
*/

for(let i = 0; i < colors.length; i++ ){
    //nummer inclusief 1 - 360 inclusief => hue
    //percentage inclusief 1 - 79 => saturatie
    //percentage inclusief 11 - 100 => LICHT
    //x = Math.random() * (max - min) + min;
    // colors[i].style.animationDelay = i/10 + "s";
    let randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    let randomSaturation =Math.floor(Math.random() * (79 - 11) + 11) + "%";
    let randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";

    colors[i].children[0].style.background = `hsl(${randomHue} ${randomSaturation} ${randomLightness})`;

    /*onclick */
    colors[i].onclick = function(){
        colors[i].children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText(colors[i].children[0].style.background);
        document.title = colors[i].children[0].style.background;
    }
}

