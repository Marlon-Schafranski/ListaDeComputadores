import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Componentes } from 'src/app/entity/Componentes';
import { FirrebaseService } from 'src/app/service/firrebase.service';
FirrebaseService
interface Computador {
  componentes: Componentes[];
  cor: boolean;
  indice: number;
}

interface RegistroCadastro {
  data: string;
  categoria: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pc: Computador = {
    componentes: [],
    cor: false,
    indice: 0,
  };

  public rodarPaginas = 'cadastro';
  public termoPesquisa!: string;
  public resultadosPesquisa: Componentes[] = [];

  constructor(
    private router: Router,
    private firebase: FirrebaseService,
    private renderer: Renderer2

  ) {
   this.firebase.buscarTodos()
   .subscribe(res => {
    this.pc.componentes = res.map(componente => {
      return {
        id: componente.payload.doc.id,
        ...componente.payload.doc.data() as any
      } as Componentes
    })
   })
  }


  // parte do cadastro de computadores
  cadastrarUsuario() {
    this.router.navigate(['/cadastro']);
  }

  editarUsuario() {
    this.router.navigateByUrl("/cadastrado")
  }

  excluirCadastro() {

  }

  mudarTema() {
    this.pc.cor = !this.pc.cor; // Alternar entre true e false
    const colorTheme = this.pc.cor ? 'dark' : 'ligth';
    this.renderer.setAttribute(document.body, 'color-theme', colorTheme);
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

  excluir() {
    this.router.navigate(['/excluir']);
  }

  // resultado de pesquisa
  executarPesquisa(event: any) {
    const termo = event.target.value;
    if (termo.trim() !== '') {
      this.resultadosPesquisa = this.pc.componentes.filter((componente) =>
        componente.categoria.toLowerCase().includes(termo.toLowerCase())
      );
    } else {
      this.resultadosPesquisa = [];
    }
  }
}
