const fibonacci = function(n) {
    n = parseInt(n);
    if (n<1) return "OOPS";
    let a = 1;
    let b = 1;
    for (let i=2; i<n; i++)
    {
        let temp = a;
        a = b;
        b = temp + a;
    }
    return b;
}

module.exports = fibonacci
