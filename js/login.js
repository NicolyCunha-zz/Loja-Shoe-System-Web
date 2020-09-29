var objLogin = new Array();
objLogin[0] = {usuario: "gerente", senha:"senha12345"}



function logar() {
  var a = document.getElementById("txtLogin").value;
  var b = document.getElementById("txtSenha").value;

  console.log(objLogin);

  for (i = 0; i < Object.keys(objLogin).length; i++) {
    if (a == objLogin[i].usuario) {
      if (b == objLogin[i].senha) {
        localStorage.setItem('userlog', objLogin[0].usuario)
        location = "../dashboard.html";
      } else {
        alert("Nome de usuário ou senha inválidos.");
      }
    } else {
      alert("Nome de usuário ou senha inválidos.");
    }
  }
}


