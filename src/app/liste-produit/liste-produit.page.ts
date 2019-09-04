import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.page.html',
  styleUrls: ['./liste-produit.page.scss'],
})
export class ListeProduitPage implements OnInit {

  listCategorie = [
    {
      libelle: "sports",
      icon: "basketball"
    },
    {
      libelle: "bricolage",
      icon: "build"
    },
    {
      libelle: "bateau",
      icon: "boat"
    },
    {
      libelle: "informatique",
      icon: "wifi"
    }
  ]

  listProduit = [
    {
      produit : "ballon",
      categorie: "sports"
    },
    {
      produit : "t-shirt",
      categorie: "sports"
    },
    {
      produit : "ordinateur",
      categorie: "informatique"
    },
    {
      produit : "moteur",
      categorie: "bateau"
    },
    {
      produit : "scie",
      categorie: "bricolage"
    },
    {
      produit : "tronçonneuse",
      categorie: "bricolage"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
