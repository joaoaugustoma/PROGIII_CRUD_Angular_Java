import { Component, OnInit } from '@angular/core';
import {Cliente} from "../shared/cliente";
import {ClienteService} from "../shared/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.sass']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const cpf = this.route.snapshot.paramMap.get('cpf'); //pegar na rota atual o parametro
    if (cpf) {
      this.clienteService.getById(cpf)?.subscribe((cliente) => {
          if (cliente) {
            this.cliente = cliente;
          }
        }, erro => {
          alert("Erro ao buscar o cliente com cpf: "+cpf);
        }
      )
    };
  }

  public salvar(cliente: Cliente) {
    let acao="criado";
    if(cliente.cpf){
      acao = "alterado";
    }
    this.clienteService.salvar(cliente)?.subscribe((cliente) => {
      alert("Cliente "+acao+" com sucesso!")
      console.log(cliente);
      this.cliente = cliente;
      this.router.navigate(['cliente']);

    }, erro => {
      alert(erro?.error?.message);
      console.log(erro);
    })
  }

}
