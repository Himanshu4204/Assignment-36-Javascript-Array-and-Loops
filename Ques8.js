/*8. Write a function called modifyArray takes array as parameter and modifies the fifthitem of the array and return the array.
 If the array length is less than five it return 'item not found'  */
 let array=[25,"Himanshu",69,"Mango",80,60,"Banana"]
 function modifyArray(arr){
    for(i=0;i<array.length;i++){
        if (array.length<5){
        return "Item Not Found"
        }else{
            array[5]="Grapes"
        }
    }
    return array
 }
 console.log(modifyArray(array))