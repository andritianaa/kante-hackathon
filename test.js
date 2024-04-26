// Fonction pour calculer la remise en fonction de la date d'anniversaire
function calculerRemise(dateAnniversaire) {
  const aujourdhui = new Date();
  const moisActuel = aujourdhui.getMonth();
  const jourActuel = aujourdhui.getDate();

  const anniversaire = new Date(dateAnniversaire);
  const moisAnniversaire = anniversaire.getMonth();
  const jourAnniversaire = anniversaire.getDate();

  // Calcul du nombre de mois restants jusqu'à l'anniversaire
  let moisRestants = moisAnniversaire - moisActuel;
  let jourDifference = jourAnniversaire - jourActuel;

  if (
    moisRestants <= 2 &&
    moisRestants !== 1 &&
    moisRestants !== 0 &&
    moisRestants > 0
  ) {
    return 0.03; // 3% de remise
  } else if (moisRestants <= 1 && moisRestants !== 0 && moisRestants > 0) {
    if (jourDifference + 30 <= 14) {
      return 0.07;
    } else if (jourDifference + 30 > 14 || jourDifference + 30 < 29)
      return 0.07; // 7% de remise
  } else if (moisRestants === -1) {
    if (jourDifference < 0) {
      jourDifferencePositive = jourDifference + 30; // Ajout de 30 jours pour obtenir une valeur positive
      if (jourDifferencePositive <= 14) {
        return 0.15;
      } else if (jourDifferencePositive <= 29 || jourDifferencePositive > 14) {
        return 0.05;
      } else return 0; // 15% de remise
    } else if (jourDifference == 0) {
      return 0.05; // 5% de remise
    } else return 0
  } else if (moisRestants === 0) return 0.15;
  return 0; // Pas de remise
}

const dateAnniversaireClient = "2004-06-03"; // Format : YYYY-MM-DD
const remise = calculerRemise(dateAnniversaireClient);
console.log("Remise pour ce client :", remise * 100, "%");
