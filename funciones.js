function desplazar(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

function redirigir(text){
    if(text == "whatsapp"){
        window.open("https://api.whatsapp.com/send?phone=50685091942&text=Hola,%20quiero%20contactarte", "_blank");
    }

    if(text == "linkedin"){
        window.open("https://www.linkedin.com/in/emmanuelcampos5", "_blank");
    }

    if(text == "correo"){
        window.open("https://mail.google.com/mail/?view=cm&to=emmanuelcampos2111@gmail.com", "_blank");
    }

    if(text == "telegram"){
        window.open("http://t.me/emmanuelcampos5", "_blank");
    }
}


