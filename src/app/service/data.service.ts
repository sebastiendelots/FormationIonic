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
    return this.http.post<Produit>(this.baseUrl + "produit.json", produit);
  }

  putProduit(produit: Produit) {
    return this.http.put<Produit>(this.baseUrl + "produit.json", produit);
  }

  getProduit(id: string) {
    return this.http.get<Produit>(this.baseUrl + "produit/" + id);
  }
}
