///////////////Question 2


interface Entity {
  id: string;
}
interface Post extends Entity {
  __tag: "post";
  userId: number;
  title: string;
  body: string;
}
interface Comment extends Entity {
  __tag: "comment";
  postId: number;
  name: string;
  email: string;
  body: string;
}

type ApiResponse<T extends Entity> =
  | { status: "success"; data: T[] }
  | { status: "error"; error: string };

type PostsUrl ={
  postsUrl: "https://jsonplaceholder.typicode.com/posts",
  id?: string
}

type CommentssUrl ={
  postsUrl: "https://jsonplaceholder.typicode.com/comments",
  id?: string
}

type fetchType = 
        PostsUrl
        |CommentssUrl


const fetchMockData = (mockData: fetchType): Post|Comment => {

    return 
}
const fetchComments = () => {
}
const fetchPosts = () => {
}