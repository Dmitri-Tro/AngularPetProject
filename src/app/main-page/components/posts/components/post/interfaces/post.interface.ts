export interface Post {
  postCategory: string;
  postTitle: string;
  postText: string;
  postImg?: string | File | null;
  postComments: { commentText?: string, commentId?: number}[];
  postId: number;
}
