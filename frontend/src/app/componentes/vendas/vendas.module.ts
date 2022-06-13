import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasRoutingModule } from './vendas-routing.module';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MensagemModule } from '../includes/mensagem/mensagem.module';


@NgModule({
  declarations: [

    IndexComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    MensagemModule,
    FormsModule,
    ToastrModule.forRoot(),
    VendasRoutingModule
  ]
})
export class VendasModule { }
