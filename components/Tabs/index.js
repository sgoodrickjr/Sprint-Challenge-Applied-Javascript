// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function TabsComponent(item) {

const topic = document.createElement('div')
topic.classList.add("tab")
topic.textContent = item;

return topic

}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((response) => {
        topicNamesArray = response.data.topics;
        topicNamesArray.map(titles => {
            
    const newTab = TabsComponent(titles);
    const topics = document.querySelector(".topics")

    topics.appendChild(newTab);
        })
    })
    .catch((err) => {
        console.log("the data was not returned", err)
    });
    console.log("After .get")