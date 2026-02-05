import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faObjectsColumn, faUser, faUsers } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, FontAwesomeModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  dashboard = faObjectsColumn;
  user = faUser;
  users = faUsers;
}
