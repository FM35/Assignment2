import fetch from "node-fetch";
async function fetchMockData(typeOfData) {
    if (typeOfData === "posts") {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response;
    }
    if (typeOfData === "comments") {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        return response;
    }
}
async function fetchComments() {
    fetchMockData("comments");
}
async function fetchPosts() {
    fetchMockData("posts");
}
const isSuccess = (api) => api.status === "success";
const match = (someSuccess, someError) => (api) => {
    if (isSuccess(api))
        return someSuccess(api.data);
    else
        return someError(api.error);
};
const data = await fetchMockData("comments");
console.log({ data });
