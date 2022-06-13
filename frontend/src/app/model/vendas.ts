import { Clientes } from 'src/app/model/clientes';
import { Produtos } from 'src/app/model/produtos';


export class Vendas {

  public id!: number;
  public fk_clientes!: number;
  public fk_produtos!: number;
  public quantidade!: number;
  public dataVenda!: Date;
  Cliente: Clientes = new Clientes;
  Produto: Produtos = new Produtos;

}
