//show array element thats bigger than 50
var arr =[12, 34, 56, 67, 89, 75, 13, 90];

for (var i=0; i<arr.length; i++){
  var num = arr[i];
  if ( num < 50){
    continue;
  }
  console.log(num);
}