const palindromes = function(string) {
    string = string.toLowerCase().replace(/[^0-9a-z]/gi, ''); // eliminate non-alpha characters
    let len = string.length;
    let midpoint = Math.floor(len/2);
    var beg;
    var end;
    if (len % 2 === 1) // set indices for odd-lengthed strings
    {
      beg = midpoint;
      end = midpoint;
    }
    else // set indices for even-lengthed strings
    {
      beg = midpoint - 1;
      end = midpoint;
    }
    while (beg >= 0)
    {
      if (string[beg] != string[end]) return false; // found mismatch
      beg--;
      end++;
    }
    return true; // no mismatch
  }
  
  module.exports = palindromes