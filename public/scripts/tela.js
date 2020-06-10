let fSelection = document.querySelector('select.first-select')
let eSelection = document.querySelector('select.end-select')
let pButton = document.querySelector('button.pesquiseB')

let a;
fSelection.addEventListener('change', () => {
    a = fSelection.options[fSelection.selectedIndex].text;
    console.log(a)
})

let b;
eSelection.addEventListener('change', () => {
    b = eSelection.options[eSelection.selectedIndex].text;
    console.log(b)
})

pButton.addEventListener('click', () => {
console.log(a +"_"+ b);
let c = (a +"_"+ b);
document.getElementById("myImg").src = "assets_unimaps/"+ c +".svg";

})


