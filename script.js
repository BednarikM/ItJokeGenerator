
/// FETCH API FUNCTION ///

async function callAPI(urlLink) {

    try {
        const response = await fetch(urlLink)

        if (!response.ok) {
            console.log(`HTTP error: ${response.status}`);
            return;
        }

        return response.json();

    } catch (e) {
        console.log("Error:", e)
    }
}

/// GET JOKE BY CHOSEN CATEGORY FUNCTION ///

async function getJoke(urlLink, jokeCategory) {

    let data = await callAPI(urlLink)

    if (data.category === jokeCategory) {
        return data

    } else {
        return getJoke(urlLink, jokeCategory);
    }
}


/// DISPLAY JOKE IN INPUT AREA BY BUTTON CLICK ///

const textArea = document.getElementById("input")
const newButton = document.createElement("button")

newButton.classList.add("btn")
newButton.innerText = "Get joke"

const container = document.querySelector(".container")
container.appendChild(newButton)


newButton.addEventListener("click", async function () {
    const response = await getJoke("https://v2.jokeapi.dev/joke/Any", "Programming")

    if (response.type === "single") {
        textArea.innerText = response.joke
    }

    if (response.type === "twopart")
        textArea.innerText = response.setup + '\r\n\n' + response.delivery
})





























/// FETCH API FUNCTION ///

// async function getJoke() {

//     const controller = new AbortController();
//     const signal = controller.signal;

//     let response = await fetch("https://v2.jokeapi.dev/joke/Any", { signal: controller.signal })

//     if (!response.ok) {
//         console.log(`HTTP error: ${response.status}`);
//     }

//     if (response.status === 429) {
//         console.log("Too many requests")
//         controller.abort();
//         await new Promise(resolve => setTimeout(resolve, 60000));
//         return getJoke()
//     }

//     let data = await response.json()

//     if (data.category === "Programming" && data.type === "single") {
//         return data

//     } else {
//         return getJoke();
//     }
// }

/// DISPLAY FETCH RESULT IN CONSOLE ///

// getJoke().then(data => {console.log(data)})

/// DISPLAY FETCH RESULT ///

// async function displayJoke() {
//     try {
//         let res = await getJoke()
//         setTimeout(() => console.log(`Returned joke: ${res.joke}`), 2000)
//     }
//     catch (error) {
//         console.log("ERROR :" + error);
//     }
// }

// displayJoke()

/// DISPLAY FETCH RESULT IN INPUT AREA BY BUTTON CLICK ///

// const textArea = document.getElementById("input")

// const newButton = document.createElement("button")
//     newButton.classList.add("btn")
//     newButton.innerText = "Get joke"

// const container = document.querySelector(".container")
//     container.appendChild(newButton)

// newButton.addEventListener("click", async function() {
//     const response = await getJoke()
//     const myInsertText = response.joke
//     textArea.innerText = myInsertText
// })