import fetch from "node-fetch";

//----------------------------------------------Interfaces, Types, Type Guards and Match-------------------------------------//

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

//----------------------------------------------Interfaces, Types, Type Guards and Match-------------------------------------//

async function fetchMockData(typeOfData: "comments" | "posts") {
  if (typeOfData === "posts") {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?");

    return response;
  }

  if (typeOfData === "comments") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );

    return response;
  }
}

async function fetchComments(postId: number): Promise<ApiResponse<Comment>> {
  //Could have used pipe("comments", fetchMockData) here but I was fighting with the tsconfig regarding the use of a top level await and import pipe from fp-ts at the same time
  const response = await fetchMockData("comments");
  const data: Comment[] = await response?.json();
  const filterData = data.filter((d) => {
    return d.postId == postId;
  });
  const statusText = response?.statusText as string;

  if (statusText == "OK") {
    return { status: "success", data: filterData };
  } else {
    return { status: "error", error: statusText };
  }
}

async function fetchPosts(id: string): Promise<ApiResponse<Post>> {
  //Could have used pipe("posts", fetchMockData) here but I was fighting with the tsconfig regarding the use of a top level await and import pipe from fp-ts at the same time
  const response = await fetchMockData("posts");
  const data: Post[] = await response?.json();
  const filterData = data.filter((d) => {
    return d.id == id;
  });
  const statusText = response?.statusText as string;

  if (statusText == "OK") {
    return { status: "success", data: filterData };
  } else {
    return { status: "error", error: statusText };
  }
}

//----------------------------------------------Program-------------------------------------//

//Fetches the first posts and all the comments on that post
const PostsData = await fetchPosts("1");
const CommentsData = await fetchComments(1);

//A very basic set-up, but in this case returning true represents a JSX Element that displays the Post on UI and false returns an Error Page
const someSuccess = (t: Comment[] | Post[]): boolean => {
  console.log(true);
  return true;
};
const someError = (error: string): boolean => {
  console.log(false);
  return false;
};

// console.log(PostsData);
// console.log(CommentsData);

match(someSuccess, someError)(PostsData);
match(someSuccess, someError)(CommentsData);
