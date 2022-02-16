
var divColors = document.querySelectorAll('.canvas') 
let container = document.querySelector('.flex-container')
let newWindow = document.createElement('div')
newWindow.style.width = '100px';
newWindow.style.height = '60px';
newWindow.style.background = 'lightgrey';

 let paint = {

    limeGreen: 14.99,
    mediumBrown: 11.14,
    royalBlue: 22.99,
    solidBlack: 4.99,
    solidCyan: 8.22,
    solidPurple: 11.99,
    solidRed: 13.42,
    solidWhite: 21.98,
    solidYellow: 14.99

}

for (let i = 0; i < divColors.length; i++){

    divColors[i].addEventListener("mouseover", ()=>{      

        
        let color = divColors[i].id;
        let price = paint[color]
    
       switch(color){

            case 'limeGreen': 
            newWindow.textContent = `Lime Green: $${price}`;
            break;
            case 'mediumBrown': 
            newWindow.textContent = `Medium Brown: $${price}`;
            break;
            case 'royalBlue': 
            newWindow.textContent = `Royal Blue: $${price}`;
            break;
            case 'solidRed': 
            newWindow.textContent = `Solid Red: $${price}`;
            break;
            case 'solidWhite': 
            newWindow.textContent = `Solid White: $${price}`;
            break;
            case 'solidBlack': 
            newWindow.textContent = `Solid Black: $${price}`;
            break;
            case 'solidCyan': 
            newWindow.textContent = `Solid Cyan: $${price}`;
            break;
            case 'solidPurple': 
            newWindow.textContent = `Solid Purple: $${price}`;
            break;
            case 'solidYellow': 
            newWindow.textContent = `Solid Yellow: $${price}`;
            break;

       }
       divColors[i].append(newWindow)
    })

}





