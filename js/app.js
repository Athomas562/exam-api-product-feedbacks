feedbackWrapper = document.querySelector(".feedback-wrapper"),
searchForm = document.querySelector("#form-search"),
feedbackCounter = document.querySelector("#feedback-counter"),
feedbackPlural = document.querySelector("#feedback-plural")

fetch("http://51.38.232.174:3002/v1/feedbacks?page=0&pageSize=100&sort=upvotes", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error:", error);
});

const butt1 = document.querySelector("#search");

butt1.addEventListener("click", () => {
    console.log("response");
});

