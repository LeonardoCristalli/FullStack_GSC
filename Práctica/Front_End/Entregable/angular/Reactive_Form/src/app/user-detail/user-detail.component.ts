import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserI } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: UserI | undefined;
  @Output() deleteMsg = new EventEmitter<number>();

  constructor(private service: UserService) {}

  ngOnInit(): void {
    const id = this.user?.id;

    if (id) {
      this.service.get(+id).subscribe({
        next: (fetchedUser) => {
          if (fetchedUser) {
            this.user = fetchedUser;
          }
        },
        error: (error) => {
          console.error('Error al obtener el usuario:', error);
        }
      });
    } 
  }

  delete() {
    const userId = this.user?.id;

    if (userId) {
      this.service.deleteUser(+userId).subscribe({
        next: () => {
          this.deleteMsg.emit(+userId);
        },
        error: (error) => {
          console.error ('Error al eliminar usuario:', error);
        }
      });
    }
  }
}
