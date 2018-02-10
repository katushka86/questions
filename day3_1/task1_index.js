var link1=document.querySelector('.link1');

link1.onclick=function () {
    link1.classList.add('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
    text.innerText="вы кликнули на 1 ссылку";
}
var link2=document.querySelector('.link2');

link2.onclick=function () {
    link2.classList.add('active');
    link1.classList.remove('active');
    link3.classList.remove('active');
    link4.classList.remove('active');
    text.innerText="вы кликнули на 2 ссылку";
}
var text=document.querySelector('.text');

var link3=document.querySelector('.link3');
link3.onclick=function () {
    link3.classList.add('active');
    link1.classList.remove('active');
    link2.classList.remove('active');
    link4.classList.remove('active');
    text.innerText="вы кликнули на 3 ссылку";
}
var link4=document.querySelector('.link4');
link4.onclick=function () {
    link4.classList.add('active');
    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    text.innerText="вы кликнули на 4 ссылку";
}