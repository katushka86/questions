//  var season = function (a) {
//     if(a==='лето') {
//         return true;
//     }
//     if(a==='осень') {
//         return true;
//     }
//     if(a==='зима') {
//         return true;
//     }
//     if(a==='весна') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// alert(season('зима'));


var season = function (x) {
    var arr = ['зима', 'весна', 'лето', 'осень'];
    if (arr.indexOf(x)===-1) {
        return false;
    }
    return true;
};
alert(season('поннедельник'));