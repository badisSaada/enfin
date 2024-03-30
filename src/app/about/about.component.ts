import { Component } from '@angular/core';
import { CommentsListComponent } from '../comments-list/comments-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommentsListComponent, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  user = {
    name: "Badis",
    email: "brunquersb@helha.be",
    phone: "+32 498 56 25 12",
    angularLevel: "novice"
  }

  commentsList = [
    {
      id: 1,
      content: "Mon commentaire 1",
      created: new Date()
    },
    {
      id: 2,
      content: "Mon commentaire 2",
      created: new Date()
    }
  ];

  addComment(comment: string) {
    this.commentsList.push({ id: this.commentsList.length + 1, content: comment, created: new Date() });
  }

  removeEvent(id: number) {
    this.commentsList = this.commentsList.filter(comment => comment.id != id);
  }

}
