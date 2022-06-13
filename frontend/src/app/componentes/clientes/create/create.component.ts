import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/model/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: any = {
    nome: null,
    rg: null,
    dataNascimento: null,
    email: null
  };

  isSuccessful = false;
  isFailed = false;
  errorMessage = '';


  constructor(
    private clientesServices: ClientesService,
    private toastr: ToastrService,
    private router: Router
    ) { }

    ngOnInit(): void {}

  onSubmit(): void {
    const { nome, rg, dataNascimento, email } = this.form;

    this.clientesServices.create(nome, rg, dataNascimento, email).subscribe({
      next: data => {
        this.isFailed = false;
        this.isSuccessful = true;
        this.router.navigateByUrl('clientes');
        this.toastr.success('Cliente Cadastrado Com Sucesso!!!');
      },
      error: err => {
        this.toastr.error(err.error.message);
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    });
  }

}
