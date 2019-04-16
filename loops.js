function forLoop(array) {
  for (let i = 0; i < 25; i++) { //let is the new command
    if (i == 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  } return array //giving access to the array I have created. Most of the time you want to return the function I've created.
}

function whileLoop(n) {
  while (parseInt(n) > 0) {
    console.log(--n)
  } if (n == 0) {
    return "done"
  }
}



//function doWhileLoop(num) {
//  do {
//    [loopBody];
//  } while (incrementVariable(num) < 10)
//}

//    if (i == 1) { //if you put just one = you are equating not comparing and the loop will be infinite
//      console.log("I am ${i} strange loop");
//    }
//      else {
//        console.log("I am `${i}` strange loops}.");
//    }
//  }
//}
