import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { UserItemComponent } from "../user-item/user-item.component";

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [NgFor, UserItemComponent]
})
export class UserListComponent {
  names: string[];

  constructor() {
    this.names = ['Zeynep', 'Serra'];
  }

}
