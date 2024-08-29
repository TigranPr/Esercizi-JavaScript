const play = document.getElementById('gioca');
const span1 = document.getElementById('sp1');
const span2 = document.getElementById('sp2');
const msg = document.getElementById('messaggio');
play.addEventListener('click', function (){
const you=Math.floor(Math.random() * 10) + 1;
const cpu=textContent=Math.floor(Math.random() * 10) + 1;

span1.textContent=you;
span2.textContent=cpu;

if(you == cpu){
    msg.innerHTML='Patta!';
}
if(you > cpu){
    msg.innerHTML='Hai vinto!';
}
if(you < cpu){
    msg.innerHTML='Hai perso!';
}

//si può fare anche in questo modo
// if(you == cpu){
//     msg.innerHTML='Patta!';
// }
// else if(you > cpu){
//     msg.innerHTML='Hai vinto!';
// }
// else{
//     msg.innerHTML='Hai perso!';
// }
            
});


