// fibonacci Numbers
function f(n){
    if(n<=1)return n;
    let last = f(n-1);
    let slast = f(n-2);
    return last + slast;
}

console.log(f(7));