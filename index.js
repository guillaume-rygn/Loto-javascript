let submit = document.getElementById("submit");

let number = [];
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let messageResult = document.getElementById("result");

let error = 0;

const checkLoto = (firstname, lastname, email, lotoNumbers) => { 

  messageResult.style.display = "none";
  
  firstname = document.getElementById("firstname");
  lastname = document.getElementById("lastname");
  email = document.getElementById("email");
  

  lotoNumbers = [Number(n1.value),Number(n2.value),Number(n3.value),Number(n4.value),Number(n5.value),Number(n6.value)];

  if (firstname.value == ""){
    document.getElementById("errorfirstname").style.display = "block";
    error ++;
  } else{
    document.getElementById("errorfirstname").style.display = "none";
  };

  if (lastname.value == ""){
    document.getElementById("errorlastname").style.display = "block";
    error ++;
  }else{
    document.getElementById("errorlastname").style.display = "none";
  };
  
  if (email.value == "" ){
    document.getElementById("erroremail").textContent = "Merci d'entrée une adresse mail";
    document.getElementById("erroremail").style.display = "block";
    error ++;
  }else{
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        document.getElementById("erroremail").style.display = "none";
      }else{
        document.getElementById("erroremail").textContent = "Merci d'entrée une adresse mail valide";
        document.getElementById("erroremail").style.display = "block";
        error ++;
      };
  };

  if (lotoNumbers.includes(0)){
    document.getElementById("errornumber").textContent = "Merci de compléter tous les numéros";
    document.getElementById("errornumber").style.display = "block";
    error ++;
  }else{
        if(lotoNumbers.map(number => Number(number) > 49).includes(true)){
          document.getElementById("errornumber").textContent = "Merci de saisir des numéros entre 1 et 49";
          document.getElementById("errornumber").style.display = "block";
          error ++;
        } else {
          let unique = [...new Set(lotoNumbers)];
          if (unique.length == 6){
            document.getElementById("errornumber").style.display = "none";
          }else{
            document.getElementById("errornumber").textContent = "Chaque numéro doit être unique";
            document.getElementById("errornumber").style.display = "block";
            error ++;
          }
        };
  };

  if (error == 0){
    
    number = [Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1];

    let uniqueLoto = [...new Set(number)];

    while(uniqueLoto.length !== 6){
      number = [Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1,Math.floor(Math.random() * 49) + 1];

      uniqueLoto = [...new Set(number)];
    };

    let result = number.filter(x => lotoNumbers.includes(x));

    messageResult.style.display = "block";

    if (result.length == 6){
      messageResult.textContent = "Félicitations, vous avez gagné 1 million !!!!!";
    }else{
      messageResult.textContent = `Désolé, vous avez perdu, les nombres gagnants sont : ${number.join(' ')}`;
    }
  } 

};

submit.addEventListener("click", checkLoto);