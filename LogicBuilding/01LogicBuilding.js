// here i tried to imporve logics 
// let n = 8;
// if(n&1===0){
//     console.log(true);
// }else console.log(false);

// console.log(n&1)

// sum of n natural no 
// let n = 20;
// let s = 0;
// for(let i = 1;i<=n;i++){
//      s+=i;
// }
// console.log(s);
// let sum = n/2*(1+n);
// console.log(sum);


// count number of digits in a number
// let n = 45231 
// // console.log(Math.floor(n/10))
// let cnt = 0;
// while(n!==0){
//     n = Math.floor(n/10);
//     cnt++;
// }
// console.log(cnt)

//swap two no. 
// let a = 10 , b= 20;
// b = b -a;
// a = a+b;
// console.log(a,b);


// access the digits of a number;
n = 123;
while(n!=0){
    let ans = Math.floor(n%10);
    console.log(ans);
    n = Math.floor(n/10);
}