function fiz1(n){
    var i;
    for(i=1;i<=n;i++){
        if(i%3==0 || i%5==0)
            {
                document.write("  fizz");

            }else{
                document.write(" "+i);
            }
    }
}