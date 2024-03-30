import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() id = -1;
  @Input() content = '';
  @Input() created!: Date;

  @Output() removeCommentEvent = new EventEmitter();

  removeComment() {
    this.removeCommentEvent.emit(this.id);
  }
}
