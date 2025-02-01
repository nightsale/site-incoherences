document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const btn = document.getElementById("submitIncoherenceBtn");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("incoherenceForm");

    // Fonction pour ajouter une incohérence à la bonne section
    function addIncoherenceToDOM(incoherence) {
        const themeListId = {
            "Thème 1": "theme1-list",
            "Thème 2": "theme2-list",
            "Thème 3": "theme3-list",
            "Thème 4": "theme4-list"
        };
        const listId = themeListId[incoherence.theme];
        const listElement = document.getElementById(listId);

        if (listElement) {
            const li = document.createElement('li');
            li.textContent = incoherence.description;
            listElement.appendChild(li);
        }
    }

    // Charger les incohérences au démarrage
    fetch('/incoherences')
        .then(response => response.json())
        .then(data => {
            data.forEach(incoherence => {
                addIncoherenceToDOM(incoherence);
            });
        });

    // Ouvrir le modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Fermer le modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fermer le modal en cliquant en dehors
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Soumettre le formulaire
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const theme = document.getElementById("theme").value;
        const description = document.getElementById("description").value;

        const incoherence = {
            theme: theme,
            description: description
        };

        fetch('/incoherences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(incoherence)
        })
        .then(response => response.json())
        .then(data => {
            addIncoherenceToDOM(data); // Ajouter directement l'incohérence soumise au DOM
            alert("Incohérence soumise avec succès !");
            modal.style.display = "none";
            form.reset();
        })
        .catch(error => console.error('Error:', error));
    });
});
