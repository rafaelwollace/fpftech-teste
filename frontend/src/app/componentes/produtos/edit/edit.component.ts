import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  produtos!: Produtos;

  form: any = {
    nomeProd: null,
    preco: null,
    valorPromocao: null,
    descricao: null
  };

  isSuccessful = false;
  isFailed = false;
  errorMessage = '';


  constructor(
    private produtosServices: ProdutosService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.produtosServices.find(this.id).subscribe((data: Produtos)=>{
        this.produtos = data;
      })
    }

  onSubmit(): void {

    this.produtosServices.update(this.id, this.produtos.nomeProd,  this.produtos.preco,  this.produtos.valorPromocao,  this.produtos.descricao).subscribe({
      next: data => {
        this.isFailed = false;
        this.isSuccessful = true;
        this.router.navigateByUrl('/produtos/index');
        this.toastr.success('Produto ID:' +this.id+ ' Foi Atulizado!');
      },
      error: err => {
        this.toastr.error(err.error.message);
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    });
  }
}
