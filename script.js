let number = document.getElementById('number');

// number.addEventListener('keyup', ()=>{


// });


const celciusTemp = ()=>{
    let celsius = (fahrenheit.value.toString() - 32) * .55556;
    return celsius
}
const fahrenTemp = ()=>{
    let fahrenheit = (celsius.value.toString() * 1.8) + 32;
    return celsius
}


// const tempConverter = ()=>{
    
// }