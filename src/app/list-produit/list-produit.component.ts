import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
list:any=[];
id:number;

  constructor(private gest:GestionService,private act: ActivatedRoute) {
    this.id=this.act.snapshot.params["id"];
    console.log(this.id);
    this.listproduit(this.id);
   }

  ngOnInit(): void {
  }

listproduit(id:number){
  this.gest.getProduitById(id).subscribe(
    {
    next : (data:any)=> { this.list=data;},
    error : (err:any)=> { },
    complete : () => { }

  })
}

deleteproduct(id:number){
  this.gest.deleteProduit(id).subscribe(()=> { this.listproduit(this.id);})
}
}