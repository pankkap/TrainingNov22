console.log("This is Statement-1");

setTimeout(() => {
    var result = 0;
    for(let i=0;i<10000000000;i++)
    {
        result +=i;     
    }
    console.log(result); 
}, );

console.log("This is Statement-3");
