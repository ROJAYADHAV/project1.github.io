var a1=prompt("enter the number of string:");
while(a1>0){
    var b1=prompt("enter the string");
    var b2=b1.split("").reverse().join("");
    if(b2===b1)
        alert("this is a palindrome");
    else
        alert("this is not an palindrome")
    a1--;
}