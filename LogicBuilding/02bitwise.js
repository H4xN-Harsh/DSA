// given a number find if it is odd aur even;
// let n = 4;
// if(n&1===1)console.log("even");


// leetcode 136
// let nums = [2,2,1];
// function ans(nums){
//     let unique = 0;
//     for(let i = 0;i<nums.length;i++){
//         unique^=nums[i];
//     }
//     return unique;
// }
// // console.log(2^2^1);
// console.log(ans(nums));


// leetcode 191

let n = 0;
let bits = 0;
let mask = 1;
for(i=0;i<32;i++){
    if((mask&n)!=0)bits++;
    mask<<=1;
}
console.log(bits);