  while (true) {
    let index = newArray.indexOf(number);
    if (index !== -1) {
      newArray.splice(index, 1);
    } else {
      break;
    }
  }