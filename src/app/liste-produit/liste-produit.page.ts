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
      libelle: "Toutes",
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
      produit : "short",
      categorie: "sports"
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

  categorieToDisplay = "Toutes";

  constructor() { }

  ngOnInit() {
  }

  showCategorie(categorie: string) {
    this.categorieToDisplay = categorie;
  }

}
