const reverseString = function(string)
{
    let newString = "";
    for (i=string.length-1; i>=0; i--)
        newString+=string[i];
    return newString;
}

module.exports = reverseString
