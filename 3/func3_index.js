var mass1=[];
var mass2=[];
var func = function(x) {
    if(x%2===0) {
        mass1.push(x);
    } else {
        mass2.push(x);
    }
    console.log(mass1);
    console.log(mass2);
}
func(5);