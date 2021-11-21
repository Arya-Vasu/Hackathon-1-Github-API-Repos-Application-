//Creating 1 input field for username -
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter Username");
input.setAttribute("class", "input");
const username = document.getElementsByClassName("input").value;
document.body.appendChild(input);

//Creating button for searching the required values -
const button = document.createElement("button");
var text = document.createTextNode("search");
button.append(text);
document.body.appendChild(button);

// //creating 4 'div' sections on page -
const repos = document.createElement('div');
repos.className = "repos";

const repos_fork_star = document.createElement('div');
repos_fork_star.className = "repos_fork_star";

const image = document.createElement('div');
image.className = "image";

const link = document.createElement('div');
link.className = "link";

//Fetching the data from the given mockapi

button.addEventListener ("click", 
function() {
    var url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((result) => result.json())
      .then((data) => console.log(data.public_repos))
      .then((data) => console.log(data.avatar_url))
      .catch((err) => console.log(err));
    repos.innerText = "Total no. of Repositories are - ";
    image.setAttribute("src", data.avatar_url);

    var url2 = `https://api.github.com/users/${username}/repos`;
    fetch(url2)
      .then((result) =>result.json())
      .then((data) => {
        for (i=0; i<data.length; i++) {
          console.log(data[i].archive_url);
        }
      })
      .catch((err) => console.log(err));
    link.innerText = "Repo links available are - ";


  }
);

document.body.appendChild(repos, repos_fork_star, image, link);

