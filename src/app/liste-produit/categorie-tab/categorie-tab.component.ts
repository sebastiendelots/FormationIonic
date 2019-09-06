import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categorie-tab',
  templateUrl: './categorie-tab.component.html',
  styleUrls: ['./categorie-tab.component.scss'],
})
export class CategorieTabComponent implements OnInit {



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
      libelle: "toutes",
      icon: "wifi"
    }
  ]

  @Output()  
  categorieToDisplay: EventEmitter<String> = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  showCategorie(categorie: string) {
    this.categorieToDisplay.emit(categorie);
  }

}
