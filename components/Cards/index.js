// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


function ArticleCards(imgUrl, authorName) {

const card = document.createElement("div");
card.classList.add("card");

const headline = document.createElement("div");
headline.classList.add("headline");
headline.textContent = `${articleHeadline}`;

const author = document.createElement("div");
author.classList.add("author");

const imgContainer = document.createElement("div");
imgContainer.classList.add("img-container");

const source = document.createElement("img");
img.src = imgUrl;

const attribution = document.createElement("span");
attribution.textContent = `By ${authorName}`;


card.appendChild(headline)
card.appendChild(author)
author.appendChild(imgContainer)
author.appendChild(authorName)
source.appendChild(imgUrl)


return card

}


const entryPoint = document.querySelector(".card-container")

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((response) => {
        response.data.message.forEach((imageUrl) => {
            const newArticleCard = ArticleCards(imageUrl, "Ernest Hemingway");
            console.log(newArticleCard);
        })
    })
    .catch((err) => {
        console.log("the data was not returned", err)
    });
    console.log("After .get")