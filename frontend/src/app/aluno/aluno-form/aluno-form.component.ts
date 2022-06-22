import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../shared/aluno';
import { AlunoService } from '../shared/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: Aluno = new Aluno();
  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //pegar na rota atual o parametro 
    if (id) {
      this.alunoService.getById(parseInt(id))?.subscribe((aluno) => {
        if (aluno) {
          this.aluno = aluno;
        }
      }, erro => {
        alert("Erro ao buscar o aluno com id: "+id);
      }
      )
    };
  }

  public salvar(aluno: Aluno) {
    let acao="criado";
    if(aluno.id){
      acao = "alterado";
    }
    this.alunoService.salvar(aluno)?.subscribe((aluno) => {
      alert("Aluno "+acao+" com sucesso!")
      console.log(aluno);
      this.aluno = aluno;
      this.router.navigate(['aluno']);

    }, erro => {
      alert(erro?.error?.message);
      console.log(erro);
    })
  }

}
