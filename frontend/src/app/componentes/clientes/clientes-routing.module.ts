import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'clientes', redirectTo: 'clientes/index', pathMatch: 'full'},
  { path: 'clientes/index', component: IndexComponent },
  { path: 'clientes/:postId/view', component: ViewComponent },
  { path: 'clientes/create', component: CreateComponent },
  { path: 'clientes/:postId/edit', component: EditComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
