import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/model/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Clientes[] = [];
  errorMessage = '';

  constructor(
    private clientesServices: ClientesService,
    private toastr: ToastrService

    ) { }


    ngOnInit(): void {
        this.clientesServices.getAll().subscribe((data: Clientes[])=>{
        this.clientes = data;
      })
    }

    delete(id:number): void {
      this.clientesServices.delete(id)
        .subscribe({
          next: (res) => {
            this.clientes = this.clientes.filter(item => item.id !== id);
            this.toastr.error('Cliente Deletado Com Sucesso!!!');
          },
          error: (e) => this.toastr.warning('Atenção, Cadastro não pode ser excluído possui relacionamento!')
        });
    }




}
