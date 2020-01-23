function dwarfRollCall(dwarves) {
  var roll = []
  var leng = dwarves.length / 2
  for (let i = leng; i < dwarves.length; i++)  {
    roll.push(`${i+1}. ${dwarves[i]}`)
  }
  return roll.join(" ")
}

function summonCaptainPlanet(planeteerCalls){
  var summonCaptainPlanet = []
  for (let i = 0; i < planeteerCalls.length; i++) {
    summonCaptainPlanet.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return summonCaptainPlanet
}

function longPlaneteerCalls(words) {
  for (let i=0; i<words.length; i++) {
    if (words[i].length>4) {
      return true
    } 
  }
  return false
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++)  {
    if (foods[i] === "cheddar") {
      return foods[i]
    } else if (foods[i] === "gouda")  {
      return foods[i]
    } else if (foods[i] === "camembert")  {
      return foods[i]
    } else if (food[i] === "swiss") {
      return food[i]
    }
    }
    return "no cheese!"
  }
  
  
  function woodsWithB (words) {
    var bwoods = []
    for (let i = 0; i < words.length; i++)  {
      if (words[i].startwith("b")) {
        bwoods.push(words[i])
      }
    }
    return bwoods
  }
  
  