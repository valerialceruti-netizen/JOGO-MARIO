const mario= document.querySelector('.mario');

const jump = () =>  {
mario.classlist.add('jump');
}
    

 

document.addEventlistener('keydown', jump);

