import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.page.html',
  styleUrls: ['./liste-produit.page.scss'],
})
export class ListeProduitPage implements OnInit {

  identifiant = 0;

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  showCategorie(categorie: string) {
    this.categorieToDisplay = categorie;
  }

  addProduit(item: any) {
    const produit = new Produit();
    produit.categorie = item.categorie;
    produit.nom = item.produit;
    this.dataService.postProduit(produit).subscribe();
  }

}
