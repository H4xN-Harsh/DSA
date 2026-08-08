// leetcode 26 remove duplicate from sorted array 
// let arr = [1,1];
// let n = arr.length;
// let i = 0;
// for(let j = 1;j<n;j++){
//     if(arr[i]!=arr[j]){
//         i++;
//         arr[i]=arr[j];
//     }
// }
// return i+1;
// console.log(arr);



// leetcode 27
// let arr = [3,2,2,3];
// let n = arr.length;
// let i = 0;
// let val = 3;
// for(let j = 1;j<n;j++){
//     if(arr[j]!=val){
//         arr[i]=arr[j];
//         i++;
//     }
// }
// // return i+1;
// console.log(arr);



// leetcode 283

// function swap(nums,i,j){
//     let temp = nums[i];
//     nums[i]=nums[j];
//     nums[j]=temp;
// }
let nums = [0,1,0,3,12];
let i = 0;
for(let j = 0;j<nums.length;j++){
    if(nums[j]!=0){
        nums[i]=nums[j];
        i++;
    }
}
while(i<nums.length){
    nums[i]=0;
    i++;
}
console.log(nums);