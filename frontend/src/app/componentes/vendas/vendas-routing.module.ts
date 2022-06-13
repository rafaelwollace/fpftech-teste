import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'vendas', redirectTo: 'vendas/index', pathMatch: 'full'},
  { path: 'vendas/index', component: IndexComponent },
  { path: 'vendas/:id/view', component: ViewComponent },
  { path: 'vendas/create', component: CreateComponent },
  { path: 'vendas/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
