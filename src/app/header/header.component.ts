import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared-elements/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService
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
}