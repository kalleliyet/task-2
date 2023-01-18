let x = document.querySelector("#X");
      let y = document.querySelector("#Y");
      let add=document.getElementById("+")
      let sous=document.getElementById("-")
      let mul=document.getElementById("*")
      let div=document.getElementById("/")

      let a=Number(x.value);
      let b=Number(y.value);

      add.addEventListener("click", function(){
        
        
        document.querySelector("h3").innerHTML = somme(a,b);
      });
      sous.addEventListener("click", function(){
        
        
        document.querySelector("h3").innerHTML = soustraction(a,b);
      });
      mul.addEventListener("click", function(){
        
        
        document.querySelector("h3").innerHTML = multiplication(a,b);
      });
      div.addEventListener("click", function(){
        
        
        document.querySelector("h3").innerHTML = division(a,b);
      });
        
      function somme(a,b) {
        return "somme : " + (a+b);
      }
      function soustraction(a,b) {
        return "soustraction : " + (a-b);
      }
      function multiplication(a,b) {
        return "multiplication : " + (a*b);
      }

      function division(a,b) {
        return "division : " + (a/b);
      }