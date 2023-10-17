import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Componentes } from 'src/app/entity/Componentes';
import { FirrebaseService } from 'src/app/service/firrebase.service';



interface pcCadastro {
  categoria: string;
  processador: string;
  placaVideo: string;
  memoriaRam: string;
  armazenamento: number;
  cor: boolean
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  pcDeCadastro: pcCadastro = {
    categoria: '',
    processador: '',
    placaVideo: '',
    memoriaRam: '',
    armazenamento: 0,
    cor: false

  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private renderer: Renderer2,
    private firebase :FirrebaseService

  ) {}

  ngOnInit() {}

  cadastro() {
    if (
      this.pcDeCadastro.categoria &&
      this.pcDeCadastro.processador &&
      this.pcDeCadastro.placaVideo &&
      this.pcDeCadastro.memoriaRam
    ) {
      let novoComponente: Componentes = new Componentes(
        this.pcDeCadastro.categoria,
        this.pcDeCadastro.processador
      );

      // Adicione uma verificação para memoriaRam antes de criar o objeto
      if (this.pcDeCadastro.placaVideo) {
        novoComponente.placaVideo = this.pcDeCadastro.placaVideo;
      }
      if (this.pcDeCadastro.memoriaRam) {
        novoComponente.memoriaRam = this.pcDeCadastro.memoriaRam;
      }
      if (this.pcDeCadastro.armazenamento) {
        novoComponente.armazenamento = this.pcDeCadastro.armazenamento;
      }

      // Continue com o código para adicionar o objeto ao Firestore

      this.firebase
        .cadastrar(novoComponente)
        .then(() => {
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          console.log(error);
          this.presentAlert('Erro', 'Erro ao salvar');
        });
    } else {
      this.presentAlert('Erro', 'Todos os campos obrigatórios devem ser preenchidos');
    }
  }



  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Cadastro de Computadores',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  mudarTema() {
    this.pcDeCadastro.cor = !this.pcDeCadastro.cor;
    const colorTheme = this.pcDeCadastro.cor ? 'dark' : 'light';
    this.renderer.setAttribute(document.body, 'color-theme', colorTheme);
  }

  voltar(){
    this.router.navigate(['/home'])
  }
}
