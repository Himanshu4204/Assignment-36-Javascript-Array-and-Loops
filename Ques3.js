/*3. Develop a small script which generate any number of characters random id.
Example:
fe3jo1gl124g
xkqci4utda1lmbelpkm03rba */
function Random_id(length){
    let id=''
    let characters="abcdefghijklmnopqrstuvwxyz0123456789"
    for(let i=0; i<length; i++){
        id+=characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return id
}
const id=Random_id(10)
console.log(id)