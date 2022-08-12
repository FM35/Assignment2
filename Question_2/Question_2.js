import fetch from "node-fetch";
async function fetchMockData(typeOfData) {
    if (typeOfData === "posts") {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response;
    }
    if (typeOfData === "comments") {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        return response;
    }
}
async function fetchComments() {
    // return fetchMockData("comments");
    const response = await fetchMockData("comments");
    const data = response === null || response === void 0 ? void 0 : response.json();
    const statusText = response === null || response === void 0 ? void 0 : response.statusText;
    if (statusText == "OK") {
        return { status: "success", data: data };
    }
    else {
        return { status: "error", data: statusText };
    }
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
const data = await fetchComments();
console.log(data);
//Post id from comments relates to id of post
