const cpf = document.querySelector('#cpf');
const form = document.querySelector('form');

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

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
  }
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
      resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9))) {
      return false;
  }
  soma = 0;
  for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
      resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(10))) {
      return false;
  }

  return true;
}

validarCPF(cpf);