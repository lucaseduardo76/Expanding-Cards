function expandBoxOne(){
    removerClass()
    box[0].classList.add('active')
}
function expandBoxTwo(){
    removerClass()
    box[1].classList.add('active')
}
function expandBoxThree(){
    removerClass()
    box[2].classList.add('active')
}
function expandBoxFour(){
    removerClass()
    box[3].classList.add('active')
}
function expandBoxFive(){
    removerClass()
    box[4].classList.add('active')
}
function removerClass(){
    for(let n in box){
        box[n].classList.remove('active');
        console.log(n)
    };
};
let box = [ document.getElementById('box1'),
            document.getElementById('box2'),
            document.getElementById('box3'),
            document.getElementById('box4'),
            document.getElementById('box5')];

let boxa = document.getElementById('box1');

