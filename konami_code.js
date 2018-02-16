const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', function(e) {
    if (arraysEqual(code, e)) {
    alert('Congratulations - You did the Konami code!')
    }
      
    })
    
}

let index = 0;

function keyDownHandler (e){
  
}