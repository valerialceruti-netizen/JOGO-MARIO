const mario= document.querySelector('.mario');
const pipe= document.querySelector('.pipe');
const jump = () =>  {
mario.classlist.add('jump');

setTimeout(() => {
    
    mario.classlist.('jump')
},  500);
}
    
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    
    if (pipePosition) {
        
    }
    
}, 10);
 

document.addEventlistener('keydown', jump);

