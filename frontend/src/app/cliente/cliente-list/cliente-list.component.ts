import { Component, OnInit } from '@angular/core';
import {Cliente} from "../shared/cliente";
import {ClienteService} from "../shared/cliente.service";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.sass']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((clientes: Cliente[]) => {
      console.log("Cliente", clientes);
      this.clientes = clientes;
    });
  }

  confirmaRemocao(cliente: Cliente) {
    let mensagem = "Deseja remover o cliente: " + cliente.primeiroNome + " " + cliente.sobreNome + ", Matricula: " + cliente.cpf + "?";
    if (confirm(mensagem)) {
      this.clienteService.remover(cliente.cpf)?.subscribe((cliente) => {
        let clienteIdx = this.clientes.findIndex((value) => value.cpf == cliente.cpf);
        this.clientes.splice(clienteIdx, 1);
        alert("Cliente removido com sucesso!");

      }, erro => {
        alert("Erro ao excluir cliente. Mensagem: " +erro?.error?.message);
      });
    }
  }

}
