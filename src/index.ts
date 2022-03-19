import { mass, product } from './data.js';
let container = document.querySelector('.container-sm')!;




function rendr (b:product){
    let carrd = document.createElement('div');
    carrd.className = "card";
    carrd.style.width = "18rem"
     
    
    let img = document.createElement('img');
    carrd.appendChild(img)
    img.src = b.img
    
    img.className ="card-img-top ratio ratio-1x1"
    
    let card_body = document.createElement('div');
    card_body.className = "card-body"
    
    let card_title = document.createElement('h5');
    card_title.className = "card-title"
    card_title.innerText = b.names
    
    let card_text = document.createElement('p');
    card_text.className = "card-text"
    
    let text_success = document.createElement('h4');
    text_success.className = "text-success"
    text_success.innerText = '$' + b.prise
    
    let ahref = document.createElement('a');
    ahref.className ="btn btn-primary w-50"
    
    container.appendChild(carrd)
    carrd.appendChild(card_body)
    card_body.appendChild(card_title)
    card_body.appendChild(card_text)
    card_text.appendChild(text_success)
    card_text.append(b.desc)
    card_body.appendChild(ahref)
}

rendr(mass[0])
rendr(mass[1])

