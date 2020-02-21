let submitBtn = document.querySelector(".back .submitBtn")
let preview = document.querySelector(".preview")
let inpt1 = document.querySelector('.back .Input1')
let inpt2 = document.querySelector('.back .Input2')
let mult = document.querySelector('.back .numbers .times')
let div = document.querySelector('.back .numbers .divi')
let sub = document.querySelector('.back .numbers .minus')
let plus = document.querySelector('.back .numbers .plus')
let clearBtn = document.querySelector('.back .clearBtn')
let backgroundLogs = document.querySelector(".Background_Logs")
let areYouIn1 = false
let areYouIn2 = false
let areYouIn3 = false
let isMult = false
let isDiv = false
let isSub = false
let isPlus = false

submitBtn.addEventListener('click',function(){
  if(inpt1 === ''){
    inpt1.value = 0
  }
  if(inpt2 === ''){
    inpt2.value = 0
  }

  var inpt2Value = Number(inpt2.value)
  var inpt1Value = Number(inpt1.value)

  if(isMult){
    preview.innerHTML = inpt1Value + ' X ' + inpt2Value + ' = '+ (inpt1Value  * inpt2Value )
  }else if(isDiv){
    preview.innerHTML = inpt1Value + ' : ' + inpt2Value + ' = '+ (inpt1Value / inpt2Value)
  }else if(isSub){
    preview.innerHTML = inpt1Value + ' - ' + inpt2Value + ' = '+ (inpt1Value - inpt2Value)
  }else if(isPlus){
    preview.innerHTML = inpt1Value + ' + ' + inpt2Value + ' = '+ (inpt2Value + inpt1Value)
  }

  for(let i = 0; i<backgroundLogs.children.length; i++){
    if(!backgroundLogs.children[i].innerHTML){
      backgroundLogs.children[i].innerHTML = preview.innerHTML
      break
    }
    //alert(backgroundLogs.children[i].innerHTML)
    if(i === 3){
      if(areYouIn1 === true){
        areYouIn1 = false
        backgroundLogs.children[3].innerHTML =preview.innerHTML
        areYouIn3 = true
        break
      }else if(areYouIn2 === true){
        areYouIn2 = false
        backgroundLogs.children[1].innerHTML =preview.innerHTML
        areYouIn1 = true
        break
      }else if(areYouIn3 === true){
        areYouIn3 = false
        backgroundLogs.children[2].innerHTML = preview.innerHTML
        areYouIn2 = true
        break
      }else{
        backgroundLogs.children[3].innerHTML = preview.innerHTML
        areYouIn3 = true
        break
      }
    }
  }
})

mult.addEventListener('click', function(){
  isMult = true
  isDiv = false
  isSub = false
  isPlus = false
})

div.addEventListener('click', function(){
  isMult = false
  isDiv = true
  isSub = false
  isPlus = false
})

sub.addEventListener('click', function(){
  isMult = false
  isDiv = false
  isSub = true
  isPlus = false
})

plus.addEventListener('click', function(){
  isMult = false
  isDiv = false
  isSub = false
  isPlus = true
})

clearBtn.addEventListener('click', function(){
  isMult = false
  isDiv = false
  isSub = false
  isPlus = false
  inpt1.value = ''
  inpt2.value = ''
  preview.innerHTML = ''
  for(let i = 0; i<backgroundLogs.children.length; i++){
    if(backgroundLogs.children[i].innerHTML === "Logs:"){
      continue
    }
    backgroundLogs.children[i].innerHTML = ""
    //alert(backgroundLogs.children[i].innerHTML)
  }
})
