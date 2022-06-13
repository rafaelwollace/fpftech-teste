import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/model/clientes';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!: number;
  clientes!: Clientes;

  constructor(
    public clientesService: ClientesService,
    private route: ActivatedRoute,
    private router: Router
   ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientesService.find(this.id).subscribe((data: Clientes)=>{
      this.clientes = data;
    });
  }

}
