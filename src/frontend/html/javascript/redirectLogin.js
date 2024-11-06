document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('/api/users/criarConta', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = './login.html';
        } else {
            const result = await response.json();
            alert(result.message || 'Erro ao criar conta.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro de rede ao tentar criar conta.');
    }
});