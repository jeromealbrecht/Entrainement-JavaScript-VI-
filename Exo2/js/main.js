let i;

// exemple: for(let index=0 ; index < array.length ; index++)
// règle 1: année divisible par 4 et non par 100;
// règle 2: année divisible par 400;
// % = moduloo (récupère le chiffre qu'il reste après la division, si nombre entier, il n'a rien)
// si let chiffre = 10%4 = il reste combien pour aller à 10, c'est le reste) il faut que le reste du modulo soit = à 0.
// || = ou

// A l'aide d'une boucle afficher tous les nombre de 0 à 100. Pour chaque multiples de 15, les remplacer par '...'


for (i = 0; i <= 100; i++) {


    if (i % 3 == 0 && i % 5 == 0) {

        document.write('<p> ... </p>');
    } else
        document.write('<p>' + i + '</p>');

}