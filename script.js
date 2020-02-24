function apertarbotao() {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  var mensagem = document.getElementById('texto')
  if (reg.test(email.value)) {
    alert(`O email ${email.value} foi enviado`)
    mensagem.innerHTML = `Projeto Seletivo Future4 <br><br><font color="#cd4d00"><u> Bem vindo ${email.value} ! </font></u>`
  } else {
    alert("Por favor, digite um email valido")
  }
}
