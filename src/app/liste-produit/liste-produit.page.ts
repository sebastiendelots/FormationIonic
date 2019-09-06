import { Component, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.page.html',
  styleUrls: ['./liste-produit.page.scss'],
})
export class ListeProduitPage implements OnInit {

  listProduit = [
    {
      id: 0,
      produit: "ballon",
      categorie: "sports"
    },
    {
      id: 1,
      produit: "t-shirt",
      categorie: "sports"
    },
    {
      id: 2,
      produit: "short",
      categorie: "sports"
    },
    {
      id: 3,
      produit: "moteur",
      categorie: "bateau"
    },
    {
      id: 4,
      produit: "scie",
      categorie: "bricolage"
    },
    {
      id: 5,
      produit: "tronçonneuse",
      categorie: "bricolage"
    }
  ]

  @Output()
  categorieToDisplay = "Toutes";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  categorieChangedHandler(categorie: string) {
    this.categorieToDisplay = categorie;
  }

  gotToProduit(id: string) {
    this.navCtrl.navigateForward("/liste-produit/produit/" + id);
  }

}
