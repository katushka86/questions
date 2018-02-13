var info1=document.querySelector('.window1');
var link1=document.querySelector('.one');
link1.onmouseover=function () {
    info1.classList.add('active');
}
link1.onmouseout=function () {
    info1.classList.remove('active');
}
var info2=document.querySelector('.window2');
var btn=document.querySelector('.btn');
btn.onclick=function () {
    info2.classList.add('active');
}
info2.onclick=function () {
    info2.classList.remove('active')
}