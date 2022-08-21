const inputpassword = document.getElementById('password');
const iconeye = document.querySelector('.iconeye');

function visualizar(){
    let inputs = inputpassword.type === 'password';

    if(inputs){
        abrirpassword()
    }else{
        fecharpassword()
    }

}

function abrirpassword(){
    inputpassword.setAttribute('type','text');
    iconeye.setAttribute("src","../page_login/svg/eye-slash-regular.svg");
}
function fecharpassword(){
    inputpassword.setAttribute('type','password');
    iconeye.setAttribute("src","../page_login/svg/eye-regular.svg");
}