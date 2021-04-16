
function isArray(){
    // let x = prompt("nhập dãy số");
    let x = document.getElementById('sNumber').value;
    let array = x.split(",");
    // document.getElementById("s1").innerHTML = array;

    array.sort(function(a, b){return b - a});

    document.getElementById("s2").innerHTML = array;
}
isArray(array)