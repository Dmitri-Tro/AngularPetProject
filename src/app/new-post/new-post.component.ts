import {Component} from '@angular/core';
import {Post} from "../main-page/components/posts/components/post/interfaces/post.interface";
import {PostsData} from "../Data/Posts.data";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  post: Post | undefined;
  selectedImage: File | null = null;
  posts: Post[] = PostsData;

  postForm: FormGroup = new FormGroup({
    newPost: new FormControl('', [
      Validators.required,
    ]),
    newPostTitle: new FormControl('', [
      Validators.required,
    ]),
    newPostCategory: new FormControl('', [
      Validators.required,
    ]),
  });


  postCategories = [
    {label: 'Angular', value: 'Angular'},
    {label: 'React', value: 'React'},
    {label: 'Vue', value: 'Vue'},
    {label: 'Else', value: 'Else'},
  ];

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    this.selectedImage = file;
  };

  onPostSubmit(): void {
    //Когда подключен сервер - отправляем на него запрос для добавления в базу данных,
    // но сейчас добавляем в Posts.data.ts
    let newPost;
    const newPostCategory = this.postForm.get('newPostCategory')?.value;
    const newPostTitle = this.postForm.get('newPostTitle')?.value;
    const newPostText = this.postForm.get('newPost')?.value;
    const newPostImg = this.selectedImage;
    const newPostId: number = this.generateUniqueId();
    newPost = {
      postCategory: newPostCategory,
      postTitle: newPostTitle,
      postText: newPostText,
      postImg: newPostImg,
      postComments: [{}],
      postId: newPostId,
    };
    this.posts.unshift(newPost);
    this.postForm.reset();
  }

  generateUniqueId(): number {
    return Date.now();
  };
}
