function calSum(){
    const a = document.getElementById("Val1").value;
    const b = document.getElementById("Val2").value;

    const sum = parseInt(a) + parseInt(b);

    document.getElementById("sum").innerHTML = "Sum :"+sum;
}

function reset(){
    const a = document.getElementById("Val1").value=" ";
    const b = document.getElementById("Val2").value=" ";

    const sum = parseInt(a) + parseInt(b);

    document.getElementById("sum").innerHTML = "Sum :"+sum;
}