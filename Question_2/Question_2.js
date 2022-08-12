import fetch from "node-fetch";
const isSuccess = (api) => api.status === "success";
const match = (someSuccess, someError) => (api) => {
    if (isSuccess(api))
        return someSuccess(api.data);
    else
        return someError(api.error);
};
//----------------------------------------------Interfaces, Types, Type Guards and Match-------------------------------------//
async function fetchMockData(typeOfData) {
    if (typeOfData === "posts") {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?");
        return response;
    }
    if (typeOfData === "comments") {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        return response;
    }
}
async function fetchComments(postId) {
    //Could have used pipe("comments", fetchMockData) here but I was fighting with the tsconfig regarding the use of a top level await and import pipe from fp-ts at the same time
    const response = await fetchMockData("comments");
    const data = await (response === null || response === void 0 ? void 0 : response.json());
    const filterData = data.filter((d) => {
        return d.postId == postId;
    });
    const statusText = response === null || response === void 0 ? void 0 : response.statusText;
    if (statusText == "OK") {
        return { status: "success", data: filterData };
    }
    else {
        return { status: "error", error: statusText };
    }
}
async function fetchPosts(id) {
    //Could have used pipe("posts", fetchMockData) here but I was fighting with the tsconfig regarding the use of a top level await and import pipe from fp-ts at the same time
    const response = await fetchMockData("posts");
    const data = await (response === null || response === void 0 ? void 0 : response.json());
    const filterData = data.filter((d) => {
        return d.id == id;
    });
    const statusText = response === null || response === void 0 ? void 0 : response.statusText;
    if (statusText == "OK") {
        return { status: "success", data: filterData };
    }
    else {
        return { status: "error", error: statusText };
    }
}
//----------------------------------------------Program-------------------------------------//
//Fetches the first posts and all the comments on that post
const PostsData = await fetchPosts("1");
const CommentsData = await fetchComments(1);
//A very basic set-up, but in this case returning true represents a JSX Element that displays the Post on UI and false returns an Error Page
const someSuccess = (t) => {
    console.log(true);
    return true;
};
const someError = (error) => {
    console.log(false);
    return false;
};
// console.log(PostsData);
// console.log(CommentsData);
match(someSuccess, someError)(PostsData);
match(someSuccess, someError)(CommentsData);
