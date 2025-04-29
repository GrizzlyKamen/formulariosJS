const userForm = document.querySelector('form#userRegistry');
userForm.addEventListener('submit', e => {
    e.preventDefault();

    const userName = document.querySelector('form#userRegistry input#name');
    const userLastname = document.querySelector('form#userRegistry input#lastname');
    const errorList = [];
    let errorMessages = "";

    if (userName.value == ""){
        errorList.push('<li>El campo Nombre no puede estar vacío.</li>');
    };
    if (userLastname.value == ""){
        errorList.push('<li>El campo Apellidos no puede estar vacío.</li>');
    };
    
    errorList.forEach(error =>{
        errorMessages += error + '\n';
    });

    if (errorList.length > 0){
        e.preventDefault();
        let ulErrores = document.querySelector('.errores ul');
        ulErrores.innerHTML = "";
        errorList.forEach(error => {
            ulErrores.innerHTML += `${error}`
        });
        // alert(errorList)
    };

    if(errorList.length == 0){
        let seccionErrores = document.querySelector('.errores');
        seccionErrores.style.display = "none";

        // let ulErrores = document.querySelector('.errores ul');
        // ulErrores.innerHTML = "";
        
    };
});