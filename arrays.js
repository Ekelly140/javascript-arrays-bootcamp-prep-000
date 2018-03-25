var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, news){
   array = [news,...array]

  return array
}
function addElementToEndOfArray(array, news){
   array = [...array, news]

  return array
}
function destructivelyAddElementToBeginningOfArray(array, news){
<<<<<<< HEAD
  array.unshift(news)
  return array
=======
   return array.unshift(news)
>>>>>>> 5a761862c9679bdc25d8faeb2e565c12427ab569
}
function destructivelyAddElementToEndOfArray(array, news){
   array.push(news)
    return  array
}

function accessElementInArray(array, place){
  return array[place];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
<<<<<<< HEAD
  array.shift()
   return array
}

function removeElementFromBeginningOfArray(array){
   return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop()
  return array
=======
   return array.shift()
}

function removeElementFromBeginningOfArray(array){
  
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array){
  return array.pop()
>>>>>>> 5a761862c9679bdc25d8faeb2e565c12427ab569
}

function removeElementFromEndOfArray (array){
  var end = array.length - 1;
  return array.slice (0,end)
}