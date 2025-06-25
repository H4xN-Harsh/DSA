// learning Recursion by solving some question 
// today's commit 
// let revers the array 
let arr = [1,2,3,4];

let revers = (arr,l=0,r=arr.length-1)=>{
    if(l>=r)return;

    [arr[l],arr[r]] = [arr[r],arr[l]];
    
    
    revers(arr,l+1,r-1);
    

}


// let re = (arr,i) => {
//     if(i>=3/2)return;
//     let temp = arr[i];
//     arr[i] = arr[n-i-1];
//     arr[n-1-1]
// }




revers(arr);
console.log(arr);
