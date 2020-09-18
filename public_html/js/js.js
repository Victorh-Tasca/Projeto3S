function check_pass() {
    if (document.getElementById('InputPassword').value ===
            document.getElementById('ConfirmPassword').value) {
        document.getElementById('registrar').disabled = false;
    } else {
        document.getElementById('registrar').disabled = true;
    }
}

function habilitacao1() {
    if (document.getElementById('user_reg').checked === true) {
        document.getElementById('user_input').disabled = false;
    }
    if (document.getElementById('user_reg').checked === false) {
        document.getElementById('user_input').disabled = true;
    }
}
function habilitacao2() {
    if (document.getElementById('prest_reg').checked === true) {
        document.getElementById('prest_input').disabled = false;
    }
    if (document.getElementById('prest_reg').checked === false) {
        document.getElementById('prest_input').disabled = true;
    }
}
function habilitacao3() {
    if (document.getElementById('admin_reg').checked === true) {
        document.getElementById('admin_input').disabled = false;
    }
    if (document.getElementById('admin_reg').checked === false) {
        document.getElementById('admin_input').disabled = true;
    }
}