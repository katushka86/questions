var compare=function(a,b) {
    if(a>b) {
        return 'a>b';
    }
    if(a<b) {
        return 'a<b';
    }
    if(a===b) {
        return 'a=b';
    }
}
alert(compare(9,8));