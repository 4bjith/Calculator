
let isCalculated=false
function btnclick(val){
    if(isCalculated){
        clrDisplay()
        isCalculated=false
    }
    document.getElementById("screen").value+=val

}
function clrDisplay(){
    document.getElementById("screen").value="";
}
function eqlclick(){
    let text=document.getElementById("screen").value
    let result=eval(text)
    document.getElementById("screen").value=result
    isCalculated=true

}