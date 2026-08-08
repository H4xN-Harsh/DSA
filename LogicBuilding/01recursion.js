// some of natural number;
function sumN(n){
    if(n==1){
        return 1;
    }
    return n+sumN(n-1);
}
// console.log(sumN(3));

function factN(n)
{
    if(n==1)return 1;
    return n*factN(n-1);
}
console.log(factN(3));
console.log(factN(5));

 function F(n){
    if(n<1)return;
    else{
        console.log(n,' ');
        F(n-1);
        console.log(n,' ');
        return;
    }
}
// F(3);


// function fibo(n){
//     if(n==0)return;
//     if(n==1||n==2){
//         return 1;
//     }
//     return fibo(n-1)+fibo(n-2);
// }
// let n=20;
// for(let i = 0;i<n;i++){
//     console.log(fibo(i),' ');
// }



// function fibo(n){
//     if(n==0)return;
//     if(n==1||n==2)return 1;
//     let st = fibo(n-1);
//     let ed = fibo(n-2);
//     console.log(st+ed);
//     return fibo(n-1);
// }
// // fibo(5);

// // reverse the array 
// // let a = ['h', 'e', 'l', 'l', 'o'];
// // function swap(n,i,j){
// //     let temp = n[i];
// //     n[i] = n[j];
// //     n[j] = temp;
// //     return n;
// // }
// // function reverse(n,left,right){
// //     if(left >= right)return n;
// //     swap(n,left,right);
// //     return reverse(n,left+1,right-1);

// // }

// // reverse(a,0,a.length-1);
// // console.log(a);


// // subset 
// let a = [1,2,3];
// let ans=[];
// let result = [];
// function sub(a,ans,i){
//     if(i===a.length){
//         result.push([...ans])
//         return ans;
//     }
//     //including
//     ans.push(a[i]);
//     sub(a,ans,i+1);

//     ans.pop();
//     // exclusion
//     sub(a,ans,i+1);
// }
// sub(a,ans,0)
// console.log(result);



// let nums = [1,2,3];
// let ans = [];
// function swap(nums,i,j){
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }
//  function getpur(nums,idx,ans){
//     if(nums.length===idx){
//         ans.push([...nums]);
//         return;
//     }
//     for(let i = idx;i<nums.length;i++){
//         swap(nums,i,idx);
//         getpur(nums,idx+1,ans);
//         swap(nums,i,idx);
//     }
//  }

//  getpur(nums,0,ans);
//  console.log(ans);

let nums = [1,2,2];
function fSub(nums,ans,res,idx){
    res.push([...ans]);
    
    for(let i = idx;i<nums.length;i++){
        if(i!=idx&&nums[i]===nums[i-1])continue;
        ans.push(nums[i]);
        fSub(nums, ans, res, i + 1);;
        ans.pop();
    }
}
let ans= [];
let result = [];
nums.sort((a, b) => a - b)
fSub(nums,ans,result,0);
console.log(result)