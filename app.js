var arr = [-3,3,5,7];
var max = arr[0];
for (let i=1;i<arr.length;i++) {
    if (max<arr[i]) {max = arr[i]};
};

console.log(max);