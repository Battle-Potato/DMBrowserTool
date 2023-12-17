function incrementDie(event)
{
    const clickedElement = event.target;
    var parentElement = clickedElement.parentElement
    var inputElement = parentElement.getElementsByTagName("input")[0]

    inputElement.value = parseInt(inputElement.value) + 1;}

function decrementDie(event)
{
    const clickedElement = event.target;
    var parentElement = clickedElement.parentElement
    var inputElement = parentElement.getElementsByTagName("input")[0]

    if(inputElement.value > 0)
    {
        inputElement.value = parseInt(inputElement.value) - 1;    }
}

function getRandomIntInclusive(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


function calculateMaxRollAsObject(input)
{
    var max = 0

    max += parseInt(input.d4) * 4
    max += parseInt(input.d6) * 6
    max += parseInt(input.d8) * 8
    max += parseInt(input.d10) * 10
    max += parseInt(input.d12) * 12
    max += parseInt(input.d20) * 20    
    max += parseInt(input.modifier)

    return max
}

function calculateMinRollAsObject(input)
{
    var min = 0

    min += parseInt(input.d4) * 1
    min += parseInt(input.d6) * 1
    min += parseInt(input.d8) * 1
    min += parseInt(input.d10) * 1
    min += parseInt(input.d12) * 1
    min += parseInt(input.d20) * 1   
    min += parseInt(input.modifier)

    return min
}

function rollInputToString(input)
{
    inputString = ""

    console.log(input)

    if(input.d4 !== "0")
    {
        if(inputString !== "")
            inputString += "+"
        inputString += (input.d4 + "d4")
    }
    if(input.d6 !== "0")
    {
        if(inputString !== "")
            inputString += "+"
        inputString += (input.d6 + "d6")
    }
    if(input.d8 !== "0")
    {
        if(inputString !== "")
            inputString += "+"
        inputString += (input.d8 + "d8")
    }
    if(input.d10 !== "0")
    {
        if(inputString !== "")
            inputString += "+"
        inputString += (input.d10 + "d10")
    }
    if(input.d12 !== "0")
    {
        if(inputString !== "")
            inputString += "+"
        inputString += (input.d12 + "d12")
    }
    if(input.d20 !== "0")
    {
        if(inputString !== "")
            inputString += "+"
        inputString += (input.d20 + "d20")
    }
    if(input.modifier !== "0")
    {
        if(inputString !== "")
            inputString += "+"
        inputString += (input.modifier)
    }

    if(inputString === "")
        inputString = "0"

    return inputString
}

function rollDice(event)
{
    var diceValues = [4, 6, 8, 10, 12, 20]
    var diceCounts = []
    var diceRoll = 0

    var diceContainer = event.target.parentElement.parentElement.parentElement

    for(var i = 0; i < diceValues.length; i++)
    {
        var diceValueString = "d" + diceValues[i]
        var dieCount = diceContainer.getElementsByClassName(diceValueString)[0].getElementsByTagName("input")[0].value

        diceCounts.push(dieCount)
    }

    for(var i = 0; i < diceValues.length; i++)
    {
        for(var j = 0; j < diceCounts[i]; j++)
        {
            roll = getRandomIntInclusive(1, diceValues[i])
            diceRoll += roll
            console.log("max: ", diceValues[i], "\nRoll: ", roll)
        }

    }
    modifier = diceContainer.getElementsByClassName("modifier-input")[0]
    diceRoll += parseInt(modifier.value)

    outputContainer = diceContainer.getElementsByClassName("dice-roll-output")[0]

    outputContainer.textContent = diceRoll
    console.log("-----------------")
 
    var input = {
        d4: diceCounts[0],
        d6: diceCounts[1],
        d8: diceCounts[2],
        d10: diceCounts[3],
        d12: diceCounts[4],
        d20: diceCounts[5],
        modifier: modifier.value
    }

    var inputString = rollInputToString(input)

    var newRoll = Handlebars.templates.rollHistory({
        input: inputString,
        output: diceRoll
    })

    var rollHistoryElement = diceContainer.getElementsByClassName("roll-history")[0]
    rollHistoryElement.insertAdjacentHTML("beforeend", newRoll)


    if(diceRoll === calculateMaxRollAsObject(input))
    {
        var outputElement = rollHistoryElement.getElementsByClassName("roll-output")
        outputElement[outputElement.length - 1].classList.toggle("sucsess")        
    }
    else if(diceRoll === calculateMinRollAsObject(input))
    {
        var outputElement = rollHistoryElement.getElementsByClassName("roll-output")
        outputElement[outputElement.length - 1].classList.toggle("fail")        
    }
}

function initEventHandlers()
{
    //inc dec buttons for dice
    var incrementButtons = document.getElementsByClassName("inc-button")
    var decrementButtons = document.getElementsByClassName("dec-button")

    for(var i = 0; i < incrementButtons.length; i++)
    {
        incrementButtons[i].addEventListener("click", incrementDie, false)
        decrementButtons[i].addEventListener("click", decrementDie, false)
    }

    //inc dec buttons for modifier


    //Roll! button
    var rollButtons = document.getElementsByClassName("dice-roll-accept")
    for(var i = 0; i < rollButtons.length; i++)
    {
        rollButtons[i].addEventListener("click", rollDice, false)
    }
}

//////////////////////////////////
//  CODE EXECUTION STARTS HERE  //
//////////////////////////////////

initEventHandlers()
