import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/model/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Clientes[] = [];

  constructor(
    private clientesServices: ClientesService,

    ) { }


    ngOnInit(): void {
      this.clientesServices.getAll().subscribe((data: Clientes[])=>{
        this.clientes = data;
      })
    }


    delete(id:number){
      this.clientesServices.delete(id).subscribe(res => {
           this.clientes = this.clientes.filter(item => item.id !== id);
          //  this.toastr.error('Categoria Deletada Com Sucesso!!!');
      })
    }

}
