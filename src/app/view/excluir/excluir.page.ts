import { Component, OnInit } from '@angular/core';
import { Componentes } from 'src/app/entity/Componentes';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirrebaseService } from 'src/app/service/firrebase.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.page.html',
  styleUrls: ['./excluir.page.scss'],
})
export class ExcluirPage implements OnInit {
  public componentes: Componentes[] = [];

  constructor(
    private firrebaseService: FirrebaseService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.firrebaseService.obterCadastro().subscribe((data) => {
      this.componentes = data;
    });
  }

  async excluirItem(id: string) {
    const confirm = await this.presentAlert(
      'Excluir item',
      'Tem certeza de que deseja excluir este item?'
    );

    if (confirm) {
      this.firrebaseService.excluir(id).then(() => {
        // Atualize a lista após a exclusão
        this.firrebaseService.obterCadastro().subscribe((data) => {
          this.componentes = data;
        });
      });
    }
  }

  async presentAlert(subHeader: string, message: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: subHeader,
        message: message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              resolve(false);
            },
          },
          {
            text: 'Confirmar',
            handler: () => {
              resolve(true);
            },
          },
        ],
      });

      await alert.present();
    });
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
