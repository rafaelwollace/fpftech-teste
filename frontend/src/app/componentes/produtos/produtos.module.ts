import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    EditComponent,
    IndexComponent,
    CreateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
