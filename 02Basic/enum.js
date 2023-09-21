var customenum;
(function (customenum) {
    customenum[customenum["FIRST"] = 0] = "FIRST";
    customenum[customenum["SECOND"] = 1] = "SECOND";
    customenum["THIRD"] = "RAUNAK";
})(customenum || (customenum = {}));
var myenum = customenum.FIRST;
var myenum2 = customenum.THIRD;
console.log(myenum, myenum2);
