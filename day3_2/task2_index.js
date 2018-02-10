var nodeText1=document.querySelector('.text1');
var nodeText2=document.querySelector('.text2');

var btn1=document.querySelector('.first');
btn1.onclick=function () {
    btn1.classList.add('active');
    btn2.classList.remove('active');
    nodeText2.classList.add('hidden');
    nodeText1.classList.remove('hidden');
}
var btn2=document.querySelector('.second');
btn2.onclick=function () {
    btn2.classList.add('active');
    btn1.classList.remove('active');
    nodeText1.classList.add('hidden');
    nodeText2.classList.remove('hidden');
}



