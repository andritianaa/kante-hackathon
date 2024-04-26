function differenceEntreDates(date1, date2) {
    const diffMilliseconds = Math.abs(date2.getTime() - date1.getTime());
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;
    const diffDays = Math.floor(diffMilliseconds / millisecondsInOneDay);
    return diffDays;
}

const dateAujourdhui = new Date('2024-01-20');

// Date précédente
const datePrecedente = new Date();

// Calcul de la différence en jours
const differenceEnJours = differenceEntreDates(datePrecedente, dateAujourdhui);

console.log("La différence en jours est :", differenceEnJours);
console.log("Ajd :", dateAujourdhui);