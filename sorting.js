let arr = [2,1,3,4];
let n = arr.length;

function selection(arr,n){
    for(let i = 0;i<n;i++){
        let mini = i;
        for(let j = i;j<n;j++){
            if(arr[j]<arr[mini]){
                mini = j;
            }
            let temp = arr[i];
            arr[i] = arr[mini];
            arr[mini] = temp;
        }
    }
}

// selection(arr,n);


function bubble(arr,n){
    for(let i = n;i>0;i--){
        for(let j = 0;j<n;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}



// bubble(arr,n)



function insertion(arr,n){
    for(let i =0;i<n;i++){
        for(let j = i;j>0;j--){
            if(arr[j-1]>arr[j]){
                let temp = arr[j-1];
                arr[j-1]=arr[j];
                arr[j] = temp;
            }
        }
    }
}


insertion(arr,n)
console.log(arr);
