import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TestObject } from 'protractor/built/driverProviders';
import { FilmeService } from '../services/filme.service';
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

  constructor(private userService: UserService, private toastController: ToastController, private filmeService: FilmeService) {
    this.buscar(this.pagina);
  }

  getFilmes() {
    this.filmeService.get().subscribe(sucess => {
      console.log(sucess)
    }, error => {
      console.log(error)
    })
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

  cadastrar() {
    const user = {
        nome: "Pedro",
        job: "leader"
    };
    this.userService.create(user).subscribe(sucess => {
      console.log(sucess);
    }, error => {
      console.log(error);
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
