function exe(task){
    console.log("executing task");
    var data = "from para"
    task(data);

}

// function doThis(){
//     console.log("hey")
// }
// exe(doThis);
// exe(function(params){
//     console.log("hello",params)
// });