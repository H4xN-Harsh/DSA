// two pointer approch
// function swap(nums,i,j){
//     let temp = nums[i];
//     nums[i]=nums[j];
//     nums[j]=temp;
// }
// let nums = [3,2,0,-1,-3,-2];
// function revers(nums,i,j){
//     if(i>=j)return nums;
//     swap(nums,i,j)
//     revers(nums,i+1,j-1);
// }
// revers(nums,0,nums.length-1);
// console.log(nums);

// function isAlphaNumeric(ch) {
//     let code = ch.charCodeAt(0);

//     return (
//         (code >= 48 && code <= 57) || // 0-9
//         (code >= 65 && code <= 90) || // A-Z
//         (code >= 97 && code <= 122)   // a-z
//     );
// }
// var isPalindrome = function(s) {
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {

//         // Skip non-alphanumeric characters from the left
//         if (!isAlphaNumeric(s[left])) {
//             left++;
//             continue;
//         }

//         // Skip non-alphanumeric characters from the right
//         if (!isAlphaNumeric(s[right])) {
//             right--;
//             continue;
//         }

//         // Compare characters (case-insensitive)
//         if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//             return false;
//         }

//         // Move both pointers inward
//         left++;
//         right--;
//     }

//     return true;
// };

// isAlphaNumaric function help to figure out which is nums, alpha ,
// function is_Alpha_Numaric(ch) {
//   let code = ch.charCodeAt(0);
//   return (
//     (code >= 48 && code <= 57) ||
//     (code >= 65 && code <= 90) ||
//     (code >= 97 && code <= 122)
//   );
// }
// function isPalindrome(s) {
//   let i = 0;
//   let j = s.length - 1;
//   while (i > j) {
//     if (!is_Alpha_Numaric(s[i])) {
//       i++;
//       continue;
//     }
//     if (!is_Alpha_Numaric(s[j])) {
//       j--;
//       continue;
//     }
//     if (s[i].toLowerCase() !== s[j].toLowerCase()){
//        return false; 
//     };
//     i++;
//     j--;
//   }

//   return true;
// }
// let s = "ab";
// console.log(isPalindrome(s));



// leetcode 189

let nums = [1,2,3,4,5,6,7];
console.log(nums)
let k = 3;
let j = nums.length-1;
for(let i = 0;i<k;i++){
    nums.unshift(nums[j]);
    nums.pop();
}
console.log(nums)