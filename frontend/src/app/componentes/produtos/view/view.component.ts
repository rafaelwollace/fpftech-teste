import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/produtos';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  produtos!: Produtos;

  constructor(
    public produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
   ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produtosService.find(this.id).subscribe((data: Produtos)=>{
      this.produtos = data;
    });
  }
}
