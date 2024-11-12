
//program1
/*---
function areaOfReactangle(length,breadth)
{
    return length*breadth
}
console.log(areaOfReactangle(2,3))
----*/

/*---
function areaOfReactangle(length,breadth)
{
    return length*breadth
}
let length=2
let breadth=3
console.log("area of rectangle is", areaOfReactangle(length,breadth))
-----*/
/*----
function areaOfReactangle(length,breadth)
{
    return length*breadth
}
let length=prompt("enter the length:")
let breadth=prompt("enter the breadth")
let result=console.log(`area of rectangle is ${length*breadth}`)
console.log(result)

-----*/

/*--program2
function areaOfSquare(s)
{
    return s*s
}
console.log(areaOfSquare(4))
----*/

/*---program3
function areaOfCircle(r)
{
    return Math.PI*r*r
}
console.log(areaOfCircle(2))
----*/

/*---program4
function Even()
{
    for(let i=1;i<=10;i++)
    {
        if(i%2==0)
            console.log(i)
    }
}
Even()
----*/

/*---program5
function EvenSum()
{
    let sum=0
    for(let i=1;i<=10;i++)
    {
        if(i%2==0)
            sum=sum+i
    }
    console.log(sum)
}
EvenSum()
----*/

/*--program6
function OddProduct()
{
    let product=1
    for(let i=1;i<=10;i++)
    {
        if(i%2!==0)
            product=product*i
    }
    console.log(product)
}
OddProduct()
----*/

/*---program7
function reverse(n)
{
   while(n!=0)
    {
    document.write(n%10)
    n=Math.floor(n/10)
    }
}
reverse(12345)
------*/


/*---program8
function even(n)
{
    while(n>0)
    {
        let r=n%10
        if(r%2==0)
            console.log(r)
        n=Math.floor(n/10)
    }
}
even(12345)
----*/

/*---program9
function evenSum(n)
{
    let sum=0
    while(n>0)
    {
        let r=n%10
        if(r%2==0)
            sum=sum+r
        n=Math.floor(n/10)
    }
    console.log(sum)
}
evenSum(12345)
-----*/

/*-----program10
function spy(n)
{
    let sum=0,product=1

    while(n!=0)
    {
        let r=n%10
        sum=sum+r
        product=product*r
        n=Math.floor(n/10)
    }
    if(sum==product)
        document.write("spy number")
    else
        document.write("not  a spy number")
}
spy(123)
spy(234)
----*/