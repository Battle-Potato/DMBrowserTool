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

function rollDice(event)
{
    var diceValues = [4, 6, 8, 10, 12, 20]
    var diceCounts = []
    var diceRoll = 0

    var diceContainer = event.target.parentElement.parentElement

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