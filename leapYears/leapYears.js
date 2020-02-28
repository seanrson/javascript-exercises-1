const leapYears = function(year)
{
    if (year % 4 == 0) // divisible by 4?
        if (year % 100 != 0 || year % 400 == 0) // not divisible by 100 unless divisible by 400?
            return true;
    return false;
}

module.exports = leapYears
