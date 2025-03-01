document.addEventListener('DOMContentLoaded', () => {
    const proposalForm = document.getElementById('proposalForm');

    if (proposalForm) {
        proposalForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const theme = document.getElementById('theme').value;
            const text = document.getElementById('text').value;

            const response = await fetch('http://localhost:3000/api/propositions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ theme, text })
            });

            if (response.ok) {
                alert('Proposition soumise avec succès !');
                document.getElementById('text').value = ''; // Réinitialisation
            } else {
                alert('Erreur lors de la soumission.');
            }
        });
    }
});

// Fonction pour charger les propositions dans les pages de thèmes
async function loadPropositions(theme) {
    const response = await fetch(`http://localhost:3000/api/propositions/${theme}`);
    const propositions = await response.json();

    const container = document.getElementById('propositionsList');
    container.innerHTML = '';

    propositions.forEach(prop => {
        const div = document.createElement('div');
        div.classList.add('card', 'p-3', 'mb-2');
        div.innerHTML = `<p>${prop.text}</p><small>${prop.date_soumission}</small>`;
        container.appendChild(div);
    });
}
