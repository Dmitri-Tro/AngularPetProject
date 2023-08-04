export interface Post {
  postCategory: string;
  postTitle: string;
  postText: string;
  postImg: string;
  postComments: { commentText: string, commentId: number}[];
  postId: number;
}


