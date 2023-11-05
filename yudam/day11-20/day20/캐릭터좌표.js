function solution(keyinput, board) {
  const width = board[0]
  const height = board[1]
  const center = [Math.floor(width / 2), Math.floor(height / 2)];
  let current = center
  
  const array = ["up", "down", "left", "right"]

  function move(input, current) {
    if (input == "up"){
      return [current[0], current[1] + 1]
    } else if(input == "down"){
      return [current[0], current[1] - 1]
    } else if (input == "left"){
      return [current[0] - 1, current[1]]
    } else if (input == "right"){
      return [current[0] + 1, current[1]]
    }else {
      return current
    }
  }

  function check_border(current) {
    let x = current[0]
    let y = current[1]
    if(current[0] > width - 1){
      x = width - 1
    } else if (current[0] < 0){
      x = 0
    }
    if(current[1] > height - 1){
      y = height - 1
    } else if (current[1] < 0){
      y = 0
    }
    return [x, y]
  }

  for (let input of keyinput) {
    current = move(input, current)
    current = check_border(current)
  }

  return [current[0] - center[0], current[1] - center[1]]
}
