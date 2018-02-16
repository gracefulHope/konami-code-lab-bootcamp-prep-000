const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', function(e) {
    if (arraysEqual(code, e)) {
    alert('Congratulations - You did the Konami code!')
    }
      
    })
    
}

function arraysEqual (array1, array2){
  if (array1.length != array2.length){
    return false
  } else {
    for (let i = 0; i < array1.length; i++){
      if (array1[i] != array2[i]){
        return false
      }
    }
    return true
  }
}