import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared-elements/data-storage.service';
import { AuthService } from '../../authentication/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) { }

  onSaveRecipes() {
    this.dataStorageService.storeData().subscribe(
      (response: Response) => {
        console.log(response)
      }
    )
  }

  onGetRecipes() {
    this.dataStorageService.fetchData();
  }

  onLogout() {
    this.authService.destroyToken()
  }
}