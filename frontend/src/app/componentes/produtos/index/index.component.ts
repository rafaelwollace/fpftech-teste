import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  produtos: Produtos[] = [];

  constructor(
    private produtosServices: ProdutosService,

    ) { }


    ngOnInit(): void {
      this.produtosServices.getAll().subscribe((data: Produtos[])=>{
        this.produtos = data;
      })
    }


    delete(id:number){
      this.produtosServices.delete(id).subscribe(res => {
           this.produtos = this.produtos.filter(item => item.id !== id);
          //  this.toastr.error('Categoria Deletada Com Sucesso!!!');
      })
    }

}
