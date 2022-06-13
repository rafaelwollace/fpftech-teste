import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'produtos', redirectTo: 'produtos/index', pathMatch: 'full'},
  { path: 'produtos/index', component: IndexComponent },
  { path: 'produtos/:id/view', component: ViewComponent },
  { path: 'produtos/create', component: CreateComponent },
  { path: 'produtos/:id/edit', component: EditComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
