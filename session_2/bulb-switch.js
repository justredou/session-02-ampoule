document.querySelector("#ampoule").addEventListener("click", (event) => {
  let etat = document.querySelector("#etat");
  let state = event.target.getAttribute("src") === "ampoule_off.png";
  
  event.target.setAttribute(
    "src", 
    state ? "ampoule_on.png" : "ampoule_off.png"
  );

  etat.textContent = state ? "allumée" : "éteinte" ;

  event.target.setAttribute("alt", "Ampoule " + etat.textContent);
});