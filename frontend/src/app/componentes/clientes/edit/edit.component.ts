import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/model/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  clientes!: Clientes;

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
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.clientesServices.find(this.id).subscribe((data: Clientes)=>{
        this.clientes = data;
      })
    }

  onSubmit(): void {

    this.clientesServices.update(this.id, this.clientes.nome,  this.clientes.rg,  this.clientes.dataNascimento,  this.clientes.email).subscribe({
      next: data => {
        this.isFailed = false;
        this.isSuccessful = true;
        this.router.navigateByUrl('/clientes/index');
        this.toastr.success('Cliente ID:' +this.id+ 'Foi Atualizado!');
      },
      error: err => {
        this.toastr.error(err.error.message);
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    });
  }


}
