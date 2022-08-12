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
const CommentData = await fetchComments(1);
const PostData = await fetchPosts("1");
console.log(CommentData);
console.log(PostData);
//Post id from comments relates to id of post
