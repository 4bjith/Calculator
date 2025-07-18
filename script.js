
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
    
    let result=new Function('return '+text)()
    document.getElementById("screen").value=result
    isCalculated=true

}
// let display=document.getElementById("screen");
function backspace(){
let display=document.getElementById("screen");
display.value=display.value.slice(0,-1)
}

document.addEventListener("keydown", function(event){
    const key=event.key;
    if(!isNaN(key) || "*/+-.".includes(key)){
        btnclick(key);
    }else if(key==="Enter" || key==="="){
        event.preventDefault();
        eqlclick();
    }else if(key==="Backspace"){
        backspace();
    }else if (key.toLowerCase() === "c") {
    clrDisplay();
  }
});