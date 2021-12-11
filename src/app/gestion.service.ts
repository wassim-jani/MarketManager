import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }

  getAllMagasins(){
    return this.http.get("http://localhost:8080/magasin")
  }

  addProduit(prod:any){
    return this.http.post("http://localhost:8080/ajoutProduit",prod)
  }

  deleteProduit(id:number){
    return this.http.delete("http://localhost:8080/deleteProduit/"+id)
  }

  getProduitById(id:number){
    return this.http.get("http://localhost:8080/produit/"+id)
  }
}
