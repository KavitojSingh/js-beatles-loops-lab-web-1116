function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
 }

function johnLennonFacts(facts) {
  var array = []
  let i = 0
  while (i < facts.length)  {
    array.push(`${facts[i]}!!!`) i++
 	}
 	return array
 }

function iLoveTheBeatles(thing) {
 var array = []
 do {array.push("I love the Beatles!")} while (++thing < 15) {return array}
 }
