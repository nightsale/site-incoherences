document.addEventListener("DOMContentLoaded", function() {
    // Récupérer le thème sélectionné depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');

    // Afficher le titre du thème
    document.getElementById('themeTitle').textContent = `Incohérences - ${theme}`;
    document.getElementById('currentTheme').textContent = theme;

    // Fonction pour ajouter les incohérences à la page
    function addIncoherenceToDOM(incoherence) {
        const listElement = document.getElementById('incoherencesList');
        const li = document.createElement('li');
        li.textContent = incoherence.description;
        listElement.appendChild(li);
    }

    // Charger les incohérences pour le thème sélectionné
    fetch('/incoherences')
        .then(response => response.json())
        .then(data => {
            const filteredIncoherences = data.filter(incoherence => incoherence.theme === theme);
            filteredIncoherences.forEach(incoherence => {
                addIncoherenceToDOM(incoherence);
            });
        })
        .catch(error => console.error('Error:', error));
});
