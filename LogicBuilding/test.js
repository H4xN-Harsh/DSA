// let a = [1,2,3];
// function swap(n,i,j){
//     let temp = n[i];
//     n[i] = n[j];
//     n[j] = temp;
//     return n;

// }
// swap(a,0,2);
// console.log(a)


// let a = 10;
// let b = a>>1;
// let c = b>>1;
// console.log(b);
// console.log(c);




let planks=[1,3,2,5,7,5,4,2,1];
// find max plank i can build output should be 4
planks.sort((a,b)=>a-b);
console.log(planks);
let maxWith = 0;
for(let i = 1;i<planks.length;i++){
    maxWith = Math.max(maxWith,planks[i]-planks[i-1])
}
console.log(maxWith)