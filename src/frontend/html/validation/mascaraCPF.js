const cpf = document.querySelector('#cpf');
cpf.addEventListener('input', (e) => {
    let value = cpf.value.replace(/\D/g, '');
    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
    }
    cpf.value = value;
});