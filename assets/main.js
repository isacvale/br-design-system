window.onload=function(){

    const customCanvas = document.querySelector(".custom-code")
    const standardCanvas = document.querySelector(".standard-code")

    document.querySelector(".tap-accordeon")
        .addEventListener("click",function(){
            customCanvas.textContent = document.querySelector("#custom-accordeon").innerHTML
            standardCanvas.textContent = document.querySelector("#standard-accordeon").innerHTML
        })

    document.querySelector(".tap-alerta")
        .addEventListener("click",function(){
            customCanvas.textContent = document.querySelector("#custom-alerta").innerHTML
            standardCanvas.textContent = document.querySelector("#standard-alerta").innerHTML
        })
    
    document.querySelector(".tap-breadcrumb")
        .addEventListener("click",function(){
            customCanvas.textContent = document.querySelector("#custom-breadcrumb").innerHTML
            standardCanvas.textContent = document.querySelector("#standard-breadcrumb").innerHTML
        })

    document.querySelector(".tap-button")
        .addEventListener("click",function(){
            customCanvas.textContent = document.querySelector("#custom-button").innerHTML
            standardCanvas.textContent = document.querySelector("#standard-button").innerHTML
        })

    document.querySelector(".tap-checkbox")
        .addEventListener("click",function(){
            customCanvas.textContent = document.querySelector("#custom-checkbox").innerHTML
            standardCanvas.textContent = document.querySelector("#standard-checkbox").innerHTML
        })

    document.querySelector(".tap-radio")
        .addEventListener("click",function(){
            customCanvas.textContent = document.querySelector("#custom-radio").innerHTML
            standardCanvas.textContent = document.querySelector("#standard-radio").innerHTML
        })
    
    document.querySelector(".tap-divider")
        .addEventListener("click",function(){
            customCanvas.textContent = document.querySelector("#custom-divider").innerHTML
            standardCanvas.textContent = document.querySelector("#standard-divider").innerHTML
        })
    
    function clearCanvas(){
        customCanvas.textContent=""
        standardCanvas.textContent=""
    }
}