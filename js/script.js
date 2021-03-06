const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.number');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    },700)
}

setTimeout(()=>{
    // setInterval(()=>{
    //     let intervalo = +(Math.random() + 1)
    //     pipe.style.animation = `pipe-animation ${intervalo}s linear infinite`;  
    // },1500)
    
    pipe.style.display = 'flex';
},1200)

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    if(pipePosition <= 195 && pipePosition > 89 && marioPosition < 100){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src='./image/game-over.png'
        mario.style.width = "70px"
        mario.style.left = '134px'

        score.value="undefinned" 

        clearInterval(loop);
    }        
},
10)
    let newScore = 0 
    const totalScore = setInterval(()=>{
    if(score.value != "undefinned"){
        console.log(score.value)
     newScore = newScore + 20;
     score.innerText = `${newScore}`
    }else{
        clearInterval(totalScore);
    }},50)



document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

