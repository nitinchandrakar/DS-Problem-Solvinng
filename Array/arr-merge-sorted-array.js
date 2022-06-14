function mergeSortedArray(arr1, arr2){
    let i=0, j=0;
    let newArr = [];
    do{
        if(arr1[i]<arr2[j] || arr2[j]==undefined){
            newArr.push(arr1[i]);
            i++;
        }else {
            newArr.push(arr2[j]);
            j++;
        }
    }while(newArr.length < arr1.length + arr2.length);

    return newArr;
}


console.log(mergeSortedArray([0,3,4,31, 32, 35, 36], [4,6,30]))

