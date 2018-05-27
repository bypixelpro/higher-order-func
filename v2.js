
function safeCheck(numb, message, func) {
  if (numb != null && typeof numb === 'number') {
    if (message != null && typeof message === 'string') {
      return func(numb, message)
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

safeCheck(3, "JS Rocks!", printMsgNumbTimes) // prints "JS Rocks! JS Rocks! JS Rocks!"
safeCheck(2, "Javascript", getNumbLetter) // 'v'
safeCheck(4, "Hola mundo!", getSubstringOfLength) // "Hola"
