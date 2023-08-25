
function calculateSalary(){
    this.basic=(document.getElementById("basic").value) || 0;
    this.hra=(document.getElementById("hra").value) || 0;
    this.da=(document.getElementById("da").value) || 0;
    this.tax=document.getElementById("tax").value;
    this.salary=function(){
        var gross = parseInt(this.basic)+parseInt(this.hra)+parseInt(this.da);
        var salary=gross*((100-this.tax)/100);
        console.log(gross)
        document.getElementById("salary").innerHTML=salary
        return salary
    }
    this.salary()
}


document.getElementById("submit").addEventListener("click",calculateSalary)
// document.getElementById("tax").addEventListener("click",taxSlider)
// document.getElementById("tax").addEventListener("mousemove",taxSlider)
setInterval(function taxSlider(){
    var tax=document.getElementById("tax").value
    document.getElementById("taxval").innerHTML=tax
},0)

