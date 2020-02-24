function apertar() {
  var email = document.getElementById('caixa')
  var mensagem = document.getElementById('texto')
  alert(`O email ${email.value} foi enviado`)
  mensagem.innerHTML = `Projeto Seletivo Future4 <br><br><font color="#cd4d00"><u> Bem vindo ${email.value} ! </font></u>`
}
