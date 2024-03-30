import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {
  @Input() comments!: any[];

  @Output() removeCommentEvent = new EventEmitter();

  removeComment(id: number) {
    this.removeCommentEvent.emit(id);
  }
}
