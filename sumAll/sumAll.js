const sumAll = function(num1, num2) 
{
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) // check if int
        return "ERROR";
    if (num1 < 0 || num2 < 0) // check if neg
        return "ERROR";   
    var min;
    var max;    
    if (num1 < num2) // find min, max
    {
        min = num1;
        max = num2;
    } 
    else
    {
        min = num2;
        max = num1;
    }
    let sum = 0;
    for (i=min; i<=max; i++) // sum range
        sum+=i;
    return sum;
}

module.exports = sumAll
