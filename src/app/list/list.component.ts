import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:any=[]
  

  constructor(private gest:GestionService) { 
    this.getMagasins();
  }

  ngOnInit(): void {
  }
  getMagasins(){
    this.gest.getAllMagasins().subscribe(
      {
        next : (data:any) => { this.list=data;console.log(data)},
        error : (err:any) => { },
        complete : () => {}
        
          
        });
      }

      /*getProduitById(){
        this.gest.getProduitById(this.list.magasin.id).subscribe({

        })
      }*/
    
  

}
