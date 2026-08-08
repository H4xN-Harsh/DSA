// leetcode 88 https://leetcode.com/problems/merge-sorted-array/submissions/2098756345
let nums1= [1,2,3,0,0,0] 
let m = 3;
let nums2 = [2,3,5];
let n = 3;

function merge(nums1,m,nums2,n){
    let k = m+n-1;
    let j = n-1;
    let i = m-1;
    while(i>=0&&j>=0){
        if(nums1[i]<nums2[j]){
            nums1[k]=nums2[j];
            j--;
            k--;
            
        }else {
            nums1[k]=nums1[i];
            i--;
            k--;
        }
    }
    while(j>=0){
        nums1[k]=nums2[j];
        j--;
        k--;
    }
}
merge(nums1,m,nums2,n);
console.log(nums1)