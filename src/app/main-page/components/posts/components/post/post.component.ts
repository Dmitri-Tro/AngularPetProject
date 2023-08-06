import {Component, OnInit} from '@angular/core';
import {PostsData} from "../../../../../Data/Posts.data";
import {ActivatedRoute} from "@angular/router";
import {Post} from "./interfaces/post.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
  ) {};

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postIdString = params.get('postId');
      if (postIdString !== null) {
        const postId = +postIdString;
        this.post = PostsData.find(post => post.postId === postId);
      }
    });
  };

  commentForm: FormGroup = new FormGroup({
    comment: new FormControl('', [
      Validators.required,
    ]),
  });

  onCommentSubmit(): void {
    //Когда подключен сервер - отправляем на него запрос для добавления в базу данных,
    // но сейчас добавляем в Posts.data.ts
    let newComment;
    if (this.post) {
      const newCommentText = this.commentForm.get('comment')?.value;
      const newCommentId: number = this.generateUniqueId();
      newComment = {
        commentText: newCommentText,
        commentId: newCommentId
      }
      this.post.postComments.unshift(newComment);
      this.commentForm.reset();
    }
  };

  generateUniqueId(): number {
    return Date.now();
  };
}
