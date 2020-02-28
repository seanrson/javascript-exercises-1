const repeatString = function(msg, num) {
let newMsg = "";
var i;
for (i=0; i<num; i++)
    newMsg += msg;
if (num < 0)
    newMsg = "ERROR";
return newMsg;
}

module.exports = repeatString
