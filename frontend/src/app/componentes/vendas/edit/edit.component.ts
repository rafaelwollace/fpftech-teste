import { Component, OnInit } from '@angular/core';
import { Vendas } from 'src/app/model/vendas';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { VendasServices } from 'src/app/services/vendas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Clientes } from 'src/app/model/clientes';
import { Produtos } from 'src/app/model/produtos';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  vendas!: Vendas;

  form: any = {
    fk_clientes: '',
    fk_produtos: '',
    quantidade: null,
    dataVend: null
};

isSuccessful = false;
isFailed = false;
errorMessage = '';

public clientes: Clientes[] = [];
public produtos: Produtos[] = [];

constructor(
  private vendasServices: VendasServices,
  private clientesServices: ClientesService,
  private produtosServices: ProdutosService,
  private toastr: ToastrService,
  private route: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.vendasServices.find(this.id).subscribe((data: Vendas)=>{
        this.vendas = data;
      }),
        this.clientesServices.getAll().subscribe((data: Clientes[])=>{
        this.clientes = data;
      }),
      this.produtosServices.getAll().subscribe((data: Produtos[])=>{
        this.produtos = data;
      })
  }

onSubmit(): void {

  this.vendasServices.update(this.id, this.vendas.fk_clientes,  this.vendas.fk_produtos,  this.vendas.quantidade,  this.vendas.dataVenda).subscribe({
    next: data => {
      this.isFailed = false;
      this.isSuccessful = true;
      this.router.navigateByUrl('/vendas/index');
      this.toastr.success('Venda ID:' +this.id+ ' Foi Atualizada!');
    },
    error: err => {
      this.toastr.error(err.error.message);
      this.errorMessage = err.error.message;
      this.isFailed = true;
    }
  });
}

}
