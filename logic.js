const DisplayData = document.getElementById("Display");

function clickToEnter(input){
   Display.value += input;
}
function calculateResult(){
    const Result = eval(DisplayData.value);
    Display.value = Result;
}
function clearDisplay(){
    Display.value = "";

}