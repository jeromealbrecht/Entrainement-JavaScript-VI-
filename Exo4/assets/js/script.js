// Dans un fichier html fourni, afficher tous les éléments du tableau days. Mettre en gras le samedi et le dimanche.

let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let i;


for (i = 0; i < days.length; i++) {

    if (days[i] == 'Samedi' || days[i] == 'Dimanche') {
        document.write('<div style = "font-weight: bold">' + days[i] + '</div>');

    } else {

        document.write('<div>' + days[i] + '</div>');

    }
}