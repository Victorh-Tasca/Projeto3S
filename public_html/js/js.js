function check_pass() {
    if (document.getElementById('InputPassword').value ===
            document.getElementById('ConfirmPassword').value) {
        document.getElementById('registrar').disabled = false;
    } else {
        document.getElementById('registrar').disabled = true;
    }
}

function habilitacao2() {
    if (document.getElementById('prest_reg').checked === true) {
        document.getElementById('prest_input').disabled = false;
    }
    if (document.getElementById('prest_reg').checked === false) {
        document.getElementById('prest_input').disabled = true;
        document.getElementById('prest_input').value = '';
    }
}

function check_newpass() {
    if (document.getElementById('NewPassword').value ===
            document.getElementById('ConfirmNewPassword').value) {
        document.getElementById('enviar').disabled = false;
    } else {
        document.getElementById('enviar').disabled = true;
    }
}
function NewPassAlert() {
    alert ("Senha alterada com sucesso!");
  }