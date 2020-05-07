const apiKey = "f870ea097ae84a0e97d68e1551db9b4a";
const fromDate = new Date().toJSON().slice(0,10).split("-");

const searchField = document.getElementById("field");
const recentElement = document.getElementById("recentradio");
const popularElement = document.getElementById("popularradio");
const ul = document.getElementById("results");

const query1 = "http://newsapi.org/v2/everything?q="
let query2 = "&from="+fromDate[0]+"-"+(fromDate[1]-1).toString().padStart(2, '0')+"-"+fromDate[2]+"&sortBy=popularity&apiKey=" + apiKey

checkIfFilled();
loadNews();

searchField.addEventListener("keyup", loadNews);
searchField.addEventListener("focus", checkIfFilled);
searchField.addEventListener("blur", checkIfFilled);
recentElement.addEventListener("click", changeSortToRecent);
popularElement.addEventListener("click", changeSortToPopular);

function checkIfFilled() {
    if(searchField.value!=="")
        searchField.classList.add("filled");
    else
        searchField.classList.remove("filled");
}

function loadNews() {
    if (searchField.value.length !== 0) {
        let fullQuery = query1 + searchField.value + query2;
        fetch(fullQuery)
            .then(response => response.json())
            .then(data => showNews(data["articles"]));
    } else {
        let ul = document.getElementById("results");
        //clear ul so that we show currently relevant articles
        ul.innerHTML = '';
        let li = document.createElement("li");
        //add HTML content to the wrapper
        li.innerHTML = `<h2>Type something to find News</h2>`;
        //add <li> tag to <ul> tag
        ul.appendChild(li);
    }
}

function showNews(articles) {
    //clear ul so that we show currently relevant articles
    ul.innerHTML = '';

    if (articles.length === 0) {
        let li = document.createElement("li");
        //add HTML content to the wrapper
        li.innerHTML = `<h2>No articles found</h2>`;
        //add <li> tag to <ul> tag
        ul.appendChild(li);
    } else {
        for (let i = 0; i < articles.length; i++) {
            let obj = articles[i];
            //create a <li> tag as wrapper for that object
            let li = document.createElement("li");
            //add HTML content to the wrapper
            if (obj.urlToImage !== "") {
                li.innerHTML = `<h2>${obj.title}</h2><p>${obj.content}</p><img src=${obj.urlToImage}>`;
            } else {
                li.innerHTML = `<h2>${obj.title}</h2><p>${obj.content}</p>`;

            }
            //add <li> tag to <ul> tag
            ul.appendChild(li);
        }
    }
}

function changeSortToRecent() {
    query2 = "&from="+fromDate[0]+"-"+(fromDate[1]-1).toString().padStart(2, '0')+"-"+fromDate[2]+"&sortBy=publishedAt&apiKey=" + apiKey;
    loadNews();
}

function changeSortToPopular() {
    query2 = "&from="+fromDate[0]+"-"+(fromDate[1]-1).toString().padStart(2, '0')+"-"+fromDate[2]+"&sortBy=popularity&apiKey=" + apiKey;
    loadNews();
}
