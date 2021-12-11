import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

id:any=0;

produit:any={"id": "",
     "description": "",
     "dateAjout": "",
     "quantite": "",
     "prixAchat": "",
     "prixVente": "",
     "magasin": {
       "id": this.id ,
       "titre": "",
       "lieu": ""
   }}
  constructor(private gest:GestionService, private router:Router, private act: ActivatedRoute) { 
this.id=this.act.snapshot.params["id"];
this.produit.magasin.id=this.id;

  }
  

  ngOnInit(): void {
  }

  add(){

    this.gest.addProduit(this.produit).subscribe({

      next : (data:any) => {
        this.router.navigate(['/',this.id])
      },
      error : (err:any) => { },
      complete : () => {}
    })
  }
}
