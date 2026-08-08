// there is two some problem
// sorted array and should return index 
function twoSumIdx(nums,tar){
    let i = 0;
    let j = nums.length - 1;
    while(i<j){
        if(nums[i]+nums[j]===tar){
            return [i,j];
        }else if(nums[i]+nums[j]>tar)j--;
        else i++;
    }
    
}


// console.log(twoSumIdx([1,2,3,4],7));
// console.log(twoSumIdx([1,2,3,4,5],9));

//unsorted array with don't use extra space and return numbers instead of index 


function twoSum(nums,tar){
    nums.sort((a,b)=>a-b);
    let i = 0;
    let j = nums.length - 1;
    while(i<j){
        if(nums[i]+nums[j]===tar){
            return [nums[i],nums[j]];
        }else if(nums[i]+nums[j]>tar)j--;
        else i++;
    }
}
console.log(twoSum([1,2,3,4,5],9));