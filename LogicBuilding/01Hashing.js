// learning hashing things 

// problem first find uniques in given array/ similar to the find singles 
let nums = [1,1,2,5,2,3,1,9,3];
function findS(nums){
    let set = new Set();
    for(let i = 0;i<nums.length;i++){
        if(set.has(nums[i])){
            set.delete(nums[i]);
        }else set.add(nums[i]);
    }
    return set;
}

console.log(findS(nums));


// leetcode problem no 2832
let sen = "thequickbrownfoxjumpsoverthelazydog";
let setSen = new Set();
for(let i = 0;i<sen.length;i++){
    setSen.add(sen[i]);
}
if(setSen.size<26) console.log(false);
else console.log(true);
