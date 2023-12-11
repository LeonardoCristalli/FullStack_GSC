import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserI } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  @Input() user: UserI | undefined;
  @Output() deleteMsg = new EventEmitter<number>();

  delete() {
    this.deleteMsg.emit(this.user?.id);
  }

}
