//9. Write a function which checks if all the items of the array are the same data type.
let array=[25,36,02,89,"Himanshu",56]

function check_array(arr){
    let dataType=typeof array[0]
    for(i=1;i<=array.length;i++){
        if(typeof array[i]!=dataType){
            return "Items are Not same data Type"
        }
    }
    return "Yes! Items are Same data Type"
}
console.log(check_array(array))