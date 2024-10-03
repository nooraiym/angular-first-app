import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy.users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log(id);
  }
}
