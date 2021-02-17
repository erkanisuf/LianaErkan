let news = document.getElementById("thenewsID");
const dateformat = moment(); //moment formatter

const fetchRSS = () => {
  fetch("./news.rss")
    .then((response) => response.text())
    .then((res) => new window.DOMParser().parseFromString(res, "text/xml"))
    .then((data) => {
      const elements = [...data.querySelectorAll("item")].slice(0, 3); //get only latest 3 news
      let htmlcode = ``;
      elements.forEach((el) => {
        let date = el.querySelector("pubDate").innerHTML;
        let formatedDate = moment(date).format("DD.MM.YYYY");
        htmlcode += `<div class="newstab">
        <p class="datecls"> ${formatedDate}</p>
        <p class="textcls">
        ${el.querySelector("title").innerHTML}
        </p>
      </div>`;
      });
      news.innerHTML = htmlcode;
    });
};

fetchRSS();
//RSS Fetching

//////////

/////////////Numbers ANimation
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

let numberClients = document.getElementById("numberClients");
let numberEmployees = document.getElementById("numberEmployees");
let numberUsers = document.getElementById("numberUsers");

animateValue(numberClients, 0, parseInt(numberClients.innerHTML), 10000);
animateValue(numberEmployees, 0, parseInt(numberEmployees.innerHTML), 10000);
animateValue(numberUsers, 0, parseInt(numberUsers.innerHTML), 10000);
/// Num Animation

//Notification
function notificationMe() {
  let email = document.getElementById("email");
  if (!email.value) {
    alert("Please Fill the email field first !");
  } else {
    alert("Thank you for subscription  - " + email.value);
  }
}

///Notific
