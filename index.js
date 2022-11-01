function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity1="go to the office") {
    return `This Monday, I will ${activity1}.`
} 

let wrapAdjective = function(special="*") {
 return function(adjective="special") {
    return `You are ${special}${adjective}${special}!`
  }
}