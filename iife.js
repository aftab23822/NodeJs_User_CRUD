(()=>{
    console.log('DB Connecting...')
})();


Array.prototype.forEachNew = function(callback){
    for (let index = 0; index < this.length; index++) {
        ++this[index];
        callback(this[index],index,this)
    }
    }

const myArr = [1,2,3,4,5]
myArr.forEachNew((el) => console.log(el))