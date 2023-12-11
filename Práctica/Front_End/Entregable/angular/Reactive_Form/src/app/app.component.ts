import { Component } from '@angular/core';
import { User, UserI } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Reactive_Form';

  users: UserI[] = [];
  selectedUser: UserI | undefined;

  constructor() {
    this.users.push(new User(1, 'Leo', 'Mate', 'lamerced@gmail.com', 'lamerced@gmail.com', 12345678, 'playadito', false, true));
    this.users.push(new User(2, 'Mike', 'Messi', 'messi@gmail.com', 'messi@gmail.com', 999999, 'dimaria', true, true));
    this.users.push(new User(3, 'asdasds', 'dsadasdas', 'dsadas@gmail.com', 'dsadas@gmail.com', 11010, '2131', false, true));
  }

  selectUser(user: UserI) {
    this.selectedUser = user;
  }

  deleteUser ($event: number) {
    this.users = this.users.filter(user => {
      return user.id !== $event;
    });
    this.selectedUser = undefined;
  }

  getMaxId() {
    return Math.max(...this.users.map(user => user.id), 0);
  }

  addUser(newUser: UserI) {
    console.log('Nuevo Usuario:', newUser);
    this.users.push(newUser);
  }

}
