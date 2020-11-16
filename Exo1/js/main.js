let annee;

// exemple: for(let index=0 ; index < array.length ; index++)
// règle 1: année divisible par 4 et non par 100;
// règle 2: année divisible par 400;
// % = moduloo (récupère le chiffre qu'il reste après la division, si nombre entier, il n'a rien)
// si let chiffre = 10%4 = il reste combien pour aller à 10, c'est le reste) il faut que le reste du modulo soit = à 0.
// || = ou


for (annee = 2020; annee <= 2030; annee++) {


    if ((annee%4 == 0 && annee % 100 != 0) || (annee % 400 == 0)) {

        document.write('<p style="color:red">' + annee + '</p>');
    } else
        document.write('<p>' + annee + '</p>');

}

