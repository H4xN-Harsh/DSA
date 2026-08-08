// leetcode 643
// var findMaxAverage = function(nums, k) {
//     let winSum = 0;
//     for(let i = 0;i<k;i++){
//         winSum +=nums[i];
//     }
//     let maxSum = winSum;
//     for(let j = k;j<nums.length;j++){
//         winSum +=nums[j];
//         winSum-=nums[j-k];
//         maxSum = Math.max(maxSum,winSum);
//     }
//     return maxSum/k;
// };
// let nums = [1,12,-5,-6,50,3];
// let k = 4;
// console.log(findMaxAverage(nums,k));



// leetcode 485

nums = [1,1,0,1,1,1];
let cnt = 0;
let maxCnt = 0;
for(let i =0;i<nums.length;i++){
    if(nums[i]==1){
        
        cnt ++;
        maxCnt = Math.max(cnt,maxCnt);

    }else{

        cnt=0;
    }
}
console.log(maxCnt);