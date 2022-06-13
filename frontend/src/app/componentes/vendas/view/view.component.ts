import { VendasServices } from 'src/app/services/vendas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vendas } from 'src/app/model/vendas';
import { Produtos } from 'src/app/model/produtos';
import { Clientes } from 'src/app/model/clientes';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  vendas!: Vendas;
  Clientes: Clientes[] = [];
  Produtos: Produtos[] = []

  constructor(
    public vendasService: VendasServices,
    private route: ActivatedRoute,
    private router: Router
   ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.vendasService.find(this.id).subscribe((data: Vendas)=>{
      this.vendas = data;
    });
  }
}
