import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MensagemModule } from '../includes/mensagem/mensagem.module';

@NgModule({
  declarations: [
    EditComponent,
    IndexComponent,
    CreateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    MensagemModule,
    FormsModule,
    ToastrModule.forRoot(),
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
