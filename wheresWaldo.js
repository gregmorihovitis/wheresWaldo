function findWaldo(arr, found) {
  arr.forEach(function (currName, index){
    if(currName === "Waldo"){
      found(index);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);