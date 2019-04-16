function forLoop() {
  for (let i = 0; i < 25; i++) {
    return "I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."
  }

forLoop();


//    if (i == 1) { //if you put just one = you are equating not comparing and the loop will be infinite
//      console.log("I am ${i} strange loop");
//    }
//      else {
//        console.log("I am `${i}` strange loops}.");
//    }
//  }
//}
