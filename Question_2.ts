import { pipe } from "fp-ts/function";
import fetch from "node-fetch"

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


const fetchMockData = (typeOfData: "comments" | "posts") => {
  if(typeOfData === "posts"){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

  if(typeOfData === "comments"){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
}

const fetchComments = () => {
  pipe("comments", fetchMockData)
}

const fetchPosts = () => {
  pipe("posts", fetchMockData)
}

fetchComments();