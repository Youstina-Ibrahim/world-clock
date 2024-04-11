function losAngelesTimezone() {
    let dateLosAngeles = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
    let dateElement = document.querySelector("#date-losAngeles");
    dateElement.innerHTML = dateLosAngeles;
  
   let timeLosAngeles = moment()
   .tz("America/Los_Angeles")
   .format("hh:mm:ss [<small>]A[</small>]");
   let timeElement = document.querySelector("#time-losAngeles");
   timeElement.innerHTML = timeLosAngeles;

}
  
 losAngelesTimezone();
 setInterval(losAngelesTimezone, 1000);


 function parisTimezone() {
    let dateParis = moment()
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");
    let dateElement = document.querySelector("#date-paris");
    dateElement.innerHTML = dateParis;
  
   let timeParis = moment()
   .tz("Europe/Paris")
   .format("hh:mm:ss [<small>]A[</small>]");
   let timeElement = document.querySelector("#time-paris");
   timeElement.innerHTML = timeParis;

}
 parisTimezone();
 setInterval(parisTimezone, 1000);

 function updateCity(event) {
   let cityTimeZone = event.target.value;
   if (cityTimeZone === "current") {cityTimeZone = moment.tz.guess();}
   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = `
   <div class="city">
     <div>
       <h2>${cityName}</h2>
       <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
     </div>
     <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
   </div>
   <a href="/Users/ibrah/OneDrive/Desktop/HTML/shecodes/world-clock/index.html">All cities</a>
   `;
 }

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

 