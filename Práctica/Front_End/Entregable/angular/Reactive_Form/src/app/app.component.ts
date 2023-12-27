import { Component } from '@angular/core';
import { UserI } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Reactive_Form';
  users: UserI[] = [];
  selectedUser: UserI | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users: UserI[]) => {
        this.users = users; 
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    });
  }

  selectUser(user: UserI) {
    this.selectedUser = user;
  }

  deleteUser($event: number) {
    this.userService.deleteUser($event).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== $event);
        this.selectedUser = undefined;
      },
      error: (error) => {
        console.log('Error al eliminar usuario:', error);
      }
    });
  }

  addUser(newUser: UserI) {
    this.users.push(newUser);
    
    this.users = [... this.users];
    console.log('Usuarios addUser', this.users);
  }
  
}
