function mostraPassword(){

    let passwordInput = document.getElementById("password");


    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text');
        let immagine = document.getElementById("eye").setAttribute("src", "../res/6351969_eye_key_look_password_security_icon.png");
    } else {
        passwordInput.setAttribute('type', 'password');
        let immagine = document.getElementById("eye").setAttribute("src", "../res/6351930_eye_password_see_view_icon.png");
    }

}

function controllo(){
    let password = document.getElementById("password").value;

    if(password.length>=8 && password.length<=20 ){
        document.getElementById("x1").setAttribute("src","../res/326572_check_icon.png");
        document.getElementById("p1").style.color="green";



    }else{
        document.getElementById("x1").setAttribute("src","../res/8666595_x_icon.png");
        document.getElementById("p1").style.color="red";
    }

   let carattereMinuscolo = /[a-z]/.test(password);

   if(carattereMinuscolo){
        document.getElementById("x2").setAttribute("src","../res/326572_check_icon.png");
        document.getElementById("p2").style.color="green";

   }else{
    document.getElementById("x2").setAttribute("src","../res/8666595_x_icon.png");
    document.getElementById("p2").style.color="red";

   }

   let carattereMaiuscolo = /[A-Z]/.test(password);

   if(carattereMaiuscolo){
        document.getElementById("x3").setAttribute("src","../res/326572_check_icon.png");
        document.getElementById("p3").style.color="green";
   }else{
        document.getElementById("x3").setAttribute("src","../res/8666595_x_icon.png");
        document.getElementById("p3").style.color="red";

   }

   let carattereNumerico = /[0-9]/.test(password);

   if(carattereNumerico){
    document.getElementById("x4").setAttribute("src","../res/326572_check_icon.png");
    document.getElementById("p4").style.color="green"; 
   }else{
    document.getElementById("x4").setAttribute("src","../res/8666595_x_icon.png");
    document.getElementById("p4").style.color="red";

   }

   let carattereSpeciale = /[@#$%!]/.test(password);

   if(carattereSpeciale){
    document.getElementById("x5").setAttribute("src","../res/326572_check_icon.png");
    document.getElementById("p5").style.color="green"; 
   }else{
    document.getElementById("x5").setAttribute("src","../res/8666595_x_icon.png");
    document.getElementById("p5").style.color="red";

}
}


