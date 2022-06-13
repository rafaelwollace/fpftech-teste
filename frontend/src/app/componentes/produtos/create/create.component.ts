import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
    private router: Router
    ) { }

  ngOnInit(): void {}

  onSubmit(): void {
    const { nomeProd, preco, valorPromocao, descricao } = this.form;

    this.produtosServices.create(nomeProd, preco, valorPromocao, descricao).subscribe({
      next: data => {
        this.isFailed = false;
        this.isSuccessful = true;
        this.router.navigateByUrl('produtos/index');
        this.toastr.success('Produto Cadastrado Com Sucesso!!!!');
      },
      error: err => {
        this.toastr.error(err.error.message);
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    });
  }

}
