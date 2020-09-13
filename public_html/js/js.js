function check_pass() {
    if (document.getElementById('InputPassword').value ===
            document.getElementById('ConfirmPassword').value) {
        document.getElementById('registrar').disabled = false;
    } else {
        document.getElementById('registrar').disabled = true;
    }
}