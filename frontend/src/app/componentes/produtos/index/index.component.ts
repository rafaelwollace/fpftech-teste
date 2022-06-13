import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  produtos: Produtos[] = [];

  constructor(
    private produtosServices: ProdutosService,
    private toastr: ToastrService
    ) { }


    ngOnInit(): void {
      this.produtosServices.getAll().subscribe((data: Produtos[])=>{
        this.produtos = data;
      })
    }


    delete(id:number): void {
      this.produtosServices.delete(id)
        .subscribe({
          next: (res) => {
            this.produtos = this.produtos.filter(item => item.id !== id);
            this.toastr.error('Produto Deletado Com Sucesso!!!');
          },
          error: (e) => this.toastr.warning('Atenção, Cadastro não pode ser excluído possui relacionamento!')
        });
    }

}
