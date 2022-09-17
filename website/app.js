/* Define Global Variables */
let d = new Date().toDateString();

// Get start URL
const startUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
const tmp = document.getElementById("temp");
const generate = document.getElementById("generate");
const content = document.getElementById("content");
const date = document.getElementById("date");

// Get my API Key
// using metric to convert temp to celisious

const apiKey = "ba1e39607f6e45eba67f7de5cc825562&units=imperial";

// start Event to get data
const begin = (event) => {
  const zip= document.getElementById("zip").value;
  const feeling = document.getElementById("feelings").value;
  getData(startUrl, zip, apiKey).then((data) => {
    postData("/postData", {
      content: feeling ,
      temp: data.main.temp,
      date: d,
    });
    setTimeout(previewData, 350);
    ;
  });
};
/* Function to GET Web API Data from the site*/
async function getData(startUrl, zipCode, apiKey) {
  const res = await fetch(`${startUrl}${zipCode}&appid=${apiKey}`);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
}
/* Function to POST data */
async function postData(url = "", projectData = {}) {
  const response = await fetch(url, {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });
  try {
    const postData = await response.json();
    return postData;
  } catch (error) {
    console.log("error", error);
  }
}
/* Function to GET Data */
async function previewData() {
  const request = await fetch("/getAll");
  try {
    let all = await request.json();
    date.innerHTML = `Recent Date: ${all.date}`;
    tmp.innerHTML = `Recent Temprature: ${all.temp} ْC`;
    content.innerHTML = `Your feelings are: ${all.content}`;
  } catch (error) {
    console.log("error", error);
  }
}
// show the data when click on button
generate.addEventListener("click", begin);
