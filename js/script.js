const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    },700)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    if(pipePosition <= 199 && pipePosition > 0 && marioPosition < 100){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src='./image/game-over.png'
        mario.style.width = "70px"
        mario.style.left = '134px'

        clearInterval(loop);
    }
},
10)

document.addEventListener('keydown', jump);
document.addEventListener(TouchEvent(jump));

