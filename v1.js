
function safeVersion(func) {
  return function(numb, message) {
    if (numb != null && typeof numb === 'number') {
      if (message != null && typeof message === 'string') {
        return func(numb, message)
      }
    }
  }
}

function printMsgNumbTimes(numb, message) {
  for (var i = 0; i < numb; i++) { console.log(message) }
}

function getNumbLetter(numb, string) {
  return string.charAt(numb)
}

function getSubstringOfLength(numb, string) {
  return string.substring(0, numb)
}

var printMessageNTimesSafe = safeVersion(printMsgNumbTimes)
var getNthLetterSafe = safeVersion(getNumbLetter)
var getSubstringOfLengthSafe = safeVersion(getSubstringOfLength)

printMessageNTimesSafe(3, "JS Rocks!") // prints "JS Rocks! JS Rocks! JS Rocks!"
getNthLetterSafe(2, "Javascript") // 'v'
getSubstringOfLengthSafe(4, "Hola mundo") // "Hela"

getNthLetterSafe("four", "Javascript") //Error
