
let Selection = document.querySelector('select')

let a;
Selection.addEventListener('change', () => {
    a = Selection.options[Selection.selectedIndex].text;
    console.log(a)

    if(a=="Mobile"){
        document.getElementById("myButton").action = "/point-map";
        console.log(a)
    } 
    if(a=="Desktop"){
        document.getElementById("myButton").action = "/tela";
        console.log(a)
    } 
})

