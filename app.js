let button = document.getElementById('btn');
button.onclick = () =>{

    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var sign = document.getElementById("operators").value;
    if (sign == '+') {
      document.getElementById("result").value = input1 + input2;
    }
    else if (sign == '-') {
      document.getElementById("result").value = input1 - input2;
    }
    else if (sign == '/') {
      document.getElementById("result").value = input1 / input2;
    }
    else if (sign == '*') {
      document.getElementById("result").value = input1 * input2;
    }
  }