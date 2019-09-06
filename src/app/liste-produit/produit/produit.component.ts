import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent implements OnInit {

  item = {
    id: "",
    nom: "ballon",
    categorie: "sports",
    description: "Un super ballon neuf !!"
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.item.id = res.id;
    })
  }

  addProduit(item: any) {
    const produit = new Produit();
    produit.categorie = item.categorie;
    produit.nom = item.nom;
    produit.id = item.id;
    this.dataService.postProduit(produit).subscribe();
  }

  return() {
    this.navCtrl.pop();
 }

}
