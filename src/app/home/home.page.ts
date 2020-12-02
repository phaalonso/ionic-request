import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TestObject } from 'protractor/built/driverProviders';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuarios: any[] = [];
  public pagina: number = 1;
  public totalPages: number;

  constructor(public userService: UserService, public toastController: ToastController) {
    this.buscar(this.pagina);
  }

  buscar(pagina: number) {
    console.log(pagina);

    this.userService.buscar(pagina).subscribe((dados: any) => {
      console.log(dados)
      if (dados.data.length > 0) {
        this.usuarios = dados.data;
        this.totalPages = dados.total_pages;
      } else {
        this.pagina--;

        this.mostrarToast('Não há mais páginas disponiveis');
      }
    });
  }

  async mostrarToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  voltarBusca() {
    if (this.pagina > 1) {
      this.pagina--;

      this.buscar(this.pagina);
    } else {
      this.mostrarToast('Essa é a primeira página')
    }
  }

  avancarBusca() {
    this.pagina++;

    this.buscar(this.pagina);
  }

}
