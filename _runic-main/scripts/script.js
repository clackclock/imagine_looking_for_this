const rc = rough.canvas(document.getElementById('canvas'));
let gen = rc.generator;

//main shape
// rc.circle(300, 185, 450, {stroke: 'orange', fill: 'yellow', fillStyle: 'zigzag', roughness: 1, hachureGap: 6});
rc.circle(300, 185, 410, {stroke: 'orange', fill: 'yellow', fillStyle: 'zigzag', roughness: 1, hachureGap: 6});
rc.polygon([[300, 5], [480, 100], [480, 270], [300, 365], [120,270], [120,100]], {stroke: 'black', fill: 'sienna', fillStyle: 'cross-hatch', roughness: 1});


let star = gen.polygon([[10, 60], [40, 60], [60,10], [80,60], [100, 60], [80, 75],[100,130],[60,100],[10,130],[35, 75]], {stroke: 'yellow', fill: 'yellow', fillStyle: 'cross-hatch', hachureGap: 8, roughness: 2});
// rc.draw(star);

function clearCanvas(){
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const myTextarea = document.getElementById("notes");
    myTextarea.value  = '// Code here...';
}

function forLoop(){
    var numIndex = prompt("Enter number of iterations:", "ex: 5");
    const myTextarea = document.getElementById("notes");

    myTextarea.value += '\nfor(' + numIndex + '){ //counts to index \n}';
}

function func(){
    const myTextarea = document.getElementById("notes");
    myTextarea.value += '\nfunction _myFunction(var myVariables){ //basic building blocks of a program';

    rc.polygon([[300, 5], [480, 100], [480, 270], [300, 365], [120,270], [120,100]], {stroke: 'black', fill: 'sienna', fillStyle: 'cross-hatch', roughness: 1});
}