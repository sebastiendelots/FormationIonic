import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "https://annonce-nc.firebaseio.com/";
  monProduit;

  constructor(private http: HttpClient) { 
    this.monProduit = new Produit();
  }

  postProduit(produit: Produit): Observable<Produit> {
    console.log(produit);
    return this.http.post<Produit>(this.baseUrl + "/produit", produit);
  }

  putProduit(produit: Produit) {
    return this.http.put<Produit>(this.baseUrl + "/produit", produit);
  }

  getProduit(id: string) {
    return this.http.get<Produit>(this.baseUrl + "/produit/" + id);
  }

  getAllProduit() {
    return this.http.get<Produit>(this.baseUrl + "/produits");
  }
}
