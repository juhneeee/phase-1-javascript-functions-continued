// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(outer = '*'){
    const innerfuncion = function (text='special'){
        return `You are ${outer}${text}${outer}!`
    }
    return innerfuncion
}