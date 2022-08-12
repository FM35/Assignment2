import fetch from "node-fetch";

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

async function fetchMockData(typeOfData: "comments" | "posts") {
  if (typeOfData === "posts") {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    return response;
  }

  if (typeOfData === "comments") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );

    return response;
  }
}

async function fetchComments() {
  return fetchMockData("comments");
}

async function fetchPosts() {
  return fetchMockData("posts");
}

const isSuccess = (
  api: ApiResponse<Comment> | ApiResponse<Post>
): api is
  | { status: "success"; data: Comment[] }
  | { status: "success"; data: Post[] } => api.status === "success";

const match =
  <T2>(
    someSuccess: (t: Comment[] | Post[]) => T2,
    someError: (error: string) => T2
  ) =>
  (api: ApiResponse<Comment> | ApiResponse<Post>): T2 => {
    if (isSuccess(api)) return someSuccess(api.data);
    else return someError(api.error);
  };

const data = await fetchComments();

console.log({ data });

//Post id from comments relates to id of post
