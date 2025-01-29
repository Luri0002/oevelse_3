// Kalder funktionen ved klik på knap
document.querySelector("button").addEventListener("click", tjekTal);

// Opretter en variabel, der tæller antallet af forsøg
let forsoeg = 0;

// Genererer et tilfældigt tal mellem 0 og 10 (Math.random() * 11 giver et decimaltal mellem 0 og 10.999..., som afrundes ned med Math.floor)
const ranNum = Math.floor(Math.random() * 11);

function tjekTal() {
  // Øger antallet af forsøg med 1 hver gang funktionen kaldes
  forsoeg++;

  // Henter brugerens indtastede tal fra inputfeltet med id="tal"
  const brugerTal = document.querySelector("#tal").value;

  // Hvis brugerens tal er lavere end det tilfældige tal
  if (ranNum > brugerTal) {
    alert("Øv! " + brugerTal + " var for lavt. Prøv igen :)");

    // Hvis brugerens tal er højere end det tilfældige tal
  } else if (ranNum < brugerTal) {
    alert("Øv! " + brugerTal + " var for højt. Prøv igen :)");

    // Hvis brugerens tal matcher det tilfældige tal
  } else {
    alert(brugerTal + " er rigtigt!" + " Du brugte " + forsoeg + " forsøg. Prøv igen med et nyt tal :)");

    // Genindlæser siden for at starte et nyt spil
    location.reload();
  }
}
