function creerPopup() {
  let divEnglobante = document.createElement('div'),
    div = document.createElement('div'),
    divCacher = document.createElement('div'),
    h1 = document.createElement('h1'),
    p = document.createElement('p'),
    boutonFermer = document.createElement('button');

  divEnglobante.id="popup";
  h1.appendChild(document.createTextNode("Popup"));
  p.appendChild(document.createTextNode("Ceci est une popup créer en JS et CSS"));
  boutonFermer.appendChild(document.createTextNode("Fermer popup"));
  boutonFermer.onclick=fermerPopup;
  div.classList.add('popup-contenu');
  divCacher.classList.add('griser-fenetre');

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(boutonFermer);
  divEnglobante.appendChild(div);
  divEnglobante.appendChild(divCacher);

  document.body.appendChild(divEnglobante);
}

function afficherPopup() {
  creerPopup();
}

function fermerPopup() {
  let divEnglobante = document.querySelector("#popup");

  divEnglobante.parentElement.removeChild(divEnglobante);
}