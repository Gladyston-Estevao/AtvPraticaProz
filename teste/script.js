document.getElementById('nextButton').addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (nameInput) {
        document.getElementById('recipientName').textContent = `Eii, ${nameInput}!`;
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else {
        alert('Por favor, insira seu nome para continuar!');
    }
});
