export const isLeap =  (year) => {
    var isLeap = false;
    if( isDivisibleBy(year,400) )
        isLeap = true;
    if( isDivisibleBy(year,4) && !isDivisibleBy(year,100) )
        isLeap = true;

     return isLeap;
}

function isDivisibleBy( year, dividend ){
        return year % dividend == 0;
}