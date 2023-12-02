let btn = document.getElementById('btn');
window.onscroll = function(){
if (scrollY >= 300)
{
    btn.style.display ='block';
}
else{
    btn.style.display ='none';
}

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function  test(){
        console.log(document.documentElement.clientWidth+" da elwidth");
        console.log(document.documentElement.clientHeight+" da elheight");
}
window.addEventListener('resize',test);