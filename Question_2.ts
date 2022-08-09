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
  | { status: "success", data: T[] }
  | { status: "error", error: string };

const success = <T>(data: T[]): { status: "success", data: T[] } => { return { status: "success", data }; };
const error = (error :string): { status: "error", error: string } => { return { status: "error", error }; };

const isSuccess = <T>(api: ApiResponse<T>): api is { status: "success", data: T[] } => api.status === "success";
const isError = <T>(api: ApiResponse<T>): api is { status: "error", error: string } => api.status === "error";

const match = <T, T2>(
  someSuccess: (t: T) => T2,
  someError: (error: string) => T2
) => (api: ApiResponse<T>): T2 =>{

  if(isSuccess(api)) return someSuccess(api.data);
  else return someError(api.error);
}

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

