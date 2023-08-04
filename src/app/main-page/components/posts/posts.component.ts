import { Component } from '@angular/core';
import {PostsData} from "../../../Data/Posts.data";
import {Router} from "@angular/router";
import { Post } from "./components/post/post.interface";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  originalPostsData: Post[] = PostsData;
  postsData: Post[] = PostsData;
  selectedCategory: string | undefined;
  searchTerm: string = '';
  constructor(private router: Router) {}

  goToPost(postId: number) {
    this.router.navigate(['/posts', postId]);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filterAndSearch();
  }

  searchPosts() {
    this.filterAndSearch();
  }

  filterAndSearch() {
    this.postsData = this.originalPostsData;

    if (this.selectedCategory) {
      this.postsData = this.postsData.filter(post => post.postCategory === this.selectedCategory);
    }

    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.postsData = this.postsData.filter(post =>
        post.postTitle.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  };
  resetFilter() {
    this.selectedCategory = undefined;
    this.searchTerm = '';
    this.filterAndSearch();
  }
}
