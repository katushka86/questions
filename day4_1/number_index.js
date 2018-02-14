var getN=function (numbers) {
    var count=0;
    for (var i=0; i<numbers.length; i++) {
        if (numbers[i]<'0') {
            count++;
        }
        }
        return count;
    }
    alert (getN([-5,8,7,9,-4,-7,9,4]));
