import { Component, OnInit } from '@angular/core';
import { Vendas } from 'src/app/model/vendas';
import { VendasServices } from 'src/app/services/vendas.service';
import { ToastrService } from 'ngx-toastr';
import { Produtos } from 'src/app/model/produtos';
import { Clientes } from 'src/app/model/clientes';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  vendas: Vendas[] = [];
  Clientes: Clientes[] = [];
  Produtos: Produtos[] = []

  constructor(
    private vendasServices: VendasServices,
    private toastr: ToastrService

    ) { }


    ngOnInit(): void {
        this.vendasServices.getAll().subscribe((data: Vendas[])=>{
        this.vendas = data;
      })
    }


    delete(id:number){
      this.vendasServices.delete(id).subscribe(res => {
           this.vendas = this.vendas.filter(item => item.id !== id);
           this.toastr.error('Venda Deletada Com Sucesso!!!');
      })
    }

}
