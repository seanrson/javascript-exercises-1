const removeFromArray = function(arr, target1, target2, target3, target4)
{
    var arrayLen;
    var target;
    for (k=1; k<arguments.length; k++) // for each element argument
    {
        arrayLen = arr.length;
        target = arguments[k];
        for (i=0; i<arrayLen; i++) // go through whole array
            if (arr[i] === target) // if we find target element
            {
                for (j=i; j<arrayLen; j++) // shift all remaining elements left
                    arr[j] = arr[j+1];
                arr = arr.slice(0, arrayLen-1) // resize array
            }
    }
    return arr
}

module.exports = removeFromArray
