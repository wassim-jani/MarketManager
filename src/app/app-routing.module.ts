import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:':id/add', component:AddComponent},
  {path:"",component:ListComponent  },
  {path:":id",component:ListProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
