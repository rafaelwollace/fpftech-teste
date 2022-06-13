import { Component, OnInit } from '@angular/core';
import { Vendas } from 'src/app/model/vendas';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VendasServices } from 'src/app/services/vendas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Clientes } from 'src/app/model/clientes';
import { Produtos } from 'src/app/model/produtos';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
    private router: Router
    ) { }

  ngOnInit(): void {
        this.clientesServices.getAll().subscribe((data: Clientes[])=>{
        this.clientes = data;
      }),
      this.produtosServices.getAll().subscribe((data: Produtos[])=>{
        this.produtos = data;
      })
  }

  onSubmit(): void {
    const { fk_clientes, fk_produtos, 	quantidade, dataVenda } = this.form;

    this.vendasServices.create(fk_clientes, fk_produtos, 	quantidade, dataVenda).subscribe({
      next: data => {
        this.isFailed = false;
        this.isSuccessful = true;
        this.router.navigateByUrl('vendas/index');
        this.toastr.success('Venda Efetuada Com Sucesso!!!');
      },
      error: err => {
        this.toastr.error(err.error.message);
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    });
  }

}
