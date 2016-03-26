console.log("corriendo..");
alert("corriendo..");
l = prompt("cual es tu numero");
document.write("<h1>tabla de multiplicar del " + l + "<br>" + "</h1>");
for (i=0; i<=10; i++){
  function multiplicar(x){
    return x * i;
  }
  
  document.write(l +" por "+ i + " = "+ multiplicar(l)+"<br>");
  }

