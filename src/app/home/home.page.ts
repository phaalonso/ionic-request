import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuarios: any[] = [];

  constructor(public userService: UserService) {
    this.buscar();
  }

  buscar() {
    this.userService.buscar().subscribe((dados: any) => {
      console.log(dados)
      this.usuarios = dados.data;
    });

  }

}
