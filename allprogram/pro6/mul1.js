function mul1(n)
{
    var i;
    var sum=0;
    for(i=1;i<n;i++){
        if(i%3==0 || i%5==0){
            sum=sum+i;
        }
    } alert(sum);
}