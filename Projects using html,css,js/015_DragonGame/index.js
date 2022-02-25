
document.onkeydown = function (e) {
    console.log(e.key)
    if (e.key == "ArrowUp") {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino')
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver')
    obstacle = document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
console.log(offsetX,offsetY)
    if(offsetX < 9 && offsetY< 5){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }


}, 1000);
 