// map -> key , value pair
// let map = new Map();
// map.set("Harsh",6)
// map.set("yuvan",6)
// map.set("Nivadita",2)
// map.set("Rosie",8);
// map.set("Kritika",4);
// map.set("Ravina",2);
// console.log(map);
// map.delete("yuvan");
// console.log(map);

// travers
// for(let key of map.keys()){
//     console.log(key);
// }

// for(let [key,value]of map){
//     console.log(`${key} -> ${value}`);
// }





// find fiquency 
// let nums = [1,2,3,2,4,3,2,7];
// let map = new Map();
// for(let i = 0;i<nums.length;i++){
//     map.set(nums[i],(map.get(nums[i])||0)+1);
// }
// console.log(map)

// leetcode 
// let heigth = [180,165,170];
// let name = ["harsh","rosie","ravina"];
// let map = new Map();
// for(let i = 0;i<name.length;i++){
//     map.set(heigth[i],name[i]);

// }
// heigth.sort((a,b)=>b-a);
// for(let i = 0;i<heigth;i++){
//     name[i]=map.get(heigth[i]);
// }
// console.log(map);
// console.log(name);
// console.log(heigth);


let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];
let map = new Map();
let ans = [];
for(let i = 0;i<nums2.length;i++){
    if(nums1[i]===nums2[i]){
        map.set(nums1[i],nums2[i]);
    }
}
console.log(map)