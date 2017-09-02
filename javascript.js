function calculate(meat, weight) {
  var s = document.getElementById("choice");
  var liha = s.options[s.selectedIndex].value;
  var weight = document.getElementById("weight").value;
  var a = document.getElementById("oven");
  var ahi = a.options[a.selectedIndex].value;

  if (liha == "lamb" && ahi == "gas") {
    alert(
      "Cook " +
      weight +
        " g lamb at 190 \u2103 for " +
        weight / 100 * 5 +
        " min"
    );
  } else if (liha == "lamb" && ahi == "electric") {
    alert(
      "Cook " + 
      weight +
        " g lamb at 190 \u2103 for " +
        weight / 100 * 6 +
        " min"
    );
  } else if (liha == "lamb" && ahi == "microWave") {
    alert(
      "Cook " + 
      weight +
        " g lamb in 750w microwave oven on high for " +
        weight / 100 * 2.4 +
        " min"
    );
  } else if (liha == "beefRare" && ahi == "gas") {
    alert(
      "Cook " + 
      weight +
        " g beef at \u2103 for " +
        weight / 100 * 2.9 +
        " min"
    );
  } else if (liha == "beefRare" && ahi == "electric") {
    alert(
      "Cook " + 
      weight +
        " g beef at 190 \u2103 for " +
        weight / 100 * 5 +
        " min"
    );
  } else if (liha == "beefRare" && ahi == "microWave") {
    alert(
      "Cook " + 
      weight +
        " g beef in 750w microwave oven on high for " +
        weight / 100 * 2.7 +
        " min"
    );
  } else if (liha == "beefMedium" && ahi == "gas") {
    alert(
      "Cook " + 
      weight +
        " g beef at 190 \u2103 for " +
        weight / 100 * 3.9 +
        " min"
    );
  } else if (liha == "beefMedium" && ahi == "electric") {
    alert(
      "Cook " + 
      weight +
        " g beef at 190 \u2103 for " +
        weight / 100 * 6 +
        " min"
    );
  } else if (liha == "beefMedium" && ahi == "microWave") {
    alert(
      "Cook " + 
      weight +
        " g beef in 750w microwave oven on high for " +
        weight / 100 * 3.1 +
        " min"
    );
  } else if (liha == "beefWellDone" && ahi == "gas") {
    alert(
      "Cook " + 
      weight +
        " g beef at 190 \u2103 for " +
        weight / 100 * 4.9 +
        " min"
    );
  } else if (liha == "beefWellDone" && ahi == "electric") {
    alert(
      "Cook " + 
      weight +
        " g beef at 190 \u2103 for " +
        weight / 100 * 6.5 +
        " min"
    );
  } else if (liha == "beefWellDone" && ahi == "microWave") {
    alert(
      "Cook " + 
      weight +
        " g beef in 750w microwave oven on high for " +
        weight / 100 * 3.5 +
        " min"
    );
  } else if (liha == "pork" && ahi == "gas" && weight <= 3000) {
    alert(
      "Cook " + 
      weight +
        " g pork at 190 \u2103 for " +
        weight / 100 * 6.5 +
        " min"
    );
  } else if (liha == "pork" && ahi == "electric" && weight <= 3000) {
    alert(
      "Cook " + 
      weight +
        " g pork at 190 \u2103 for " +
        weight / 100 * 5 +
        " min"
    );
  } else if (liha == "pork" && ahi == "microWave" && weight <= 3000) {
    alert(
      "Cook " + 
      weight +
        " g pork in 750w microwave oven on high for " +
        weight / 100 * 3.1 +
        " min"
    );
  } else if (liha == "pork" && ahi == "gas" && weight >= 3001) {
    alert(
      "Cook " + 
      weight +
        " g pork at 190 \u2103 for " +
        weight / 100 * 6 +
        " min"
    );
  } else if (liha == "pork" && ahi == "electric" && weight >= 3001) {
    alert(
      "Cook " + 
      weight +
        " g pork at 190 \u2103 for " +
        weight / 100 * 3.5 +
        " min"
    );
  } else if (liha == "pork" && ahi == "microWave" && weight >= 3001) {
    alert(
      "Cook " + 
      weight +
        " g pork in 750w microwave oven on high for " +
        weight / 100 * 3.1 +
        " min"
    );
  } else if (liha == "duck" && ahi == "gas") {
    alert(
      "Cook " + 
      weight +
        " g duck at 190 \u2103 for " +
        weight / 100 * 6 +
        " min"
    );
  } else if (liha == "duck" && ahi == "electric") {
    alert(
      "Cook " + 
      weight +
        " g duck at 190 \u2103 for " +
        weight / 100 * 6 +
        " min"
    );
  } else if (liha == "duck" && ahi == "microWave") {
    alert(
      weight +
        " g duck in 750w microwave oven on high for " +
        weight / 100 * 2.5 +
        " min"
    );
  } else if (liha == "chicken" && ahi == "gas") {
    alert(
      "Cook " + 
      weight +
        " g chicken at 190 \u2103 for " +
        weight / 100 * 3.9 +
        " min"
    );
  } else if (liha == "chicken" && ahi == "electric") {
    alert(
      "Cook " + 
      weight + " g chicken at 190 \u2103 for " + weight / 100 * 5 + " min"
    );
  } else if (liha == "chicken" && ahi == "microWave") {
    alert(
      "Cook " + 
      weight +
        " g chicken in 750w microwave oven on high for " +
        weight / 100 * 2.5 +
        " min"
    );
  } else if (liha == "turkey" && ahi == "gas") {
    alert(
      "Cook " + 
      weight +
        " g turkey at 190 \u2103 for " +
        weight / 100 * 3.9 +
        " min"
    );
  } else if (liha == "turkey" && ahi == "electric") {
    alert(
      "Cook " + 
      weight +
        " g turkey at 190 \u2103 for " +
        weight / 100 * 5 +
        " min"
    );
  } else if (liha == "turkey" && ahi == "microWave") {
    alert("Do not microwave turkey.");
  } else {
    alert("Hey bub! What're ya cookin'?");
  }
}
