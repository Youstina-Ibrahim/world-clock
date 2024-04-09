function losAngelesTimezone() {
    let dateLosAngeles = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
    let dateElement = document.querySelector("#date-losAngeles");
    dateElement.innerHTML = dateLosAngeles;
  
   let timeLosAngeles = moment()
   .tz("America/Los_Angeles")
   .format("hh:mm:ss");
   let timeElement = document.querySelector("#time-losAngeles");
   timeElement.innerHTML = timeLosAngeles;

}
  
 losAngelesTimezone();
 setInterval(losAngelesTimezone, 1000);


 function parisTimezone() {
    let dateParis = moment()
    .tz("Europe/France")
    .format("MMMM Do YYYY");
    let dateElement = document.querySelector("#date-paris");
    dateElement.innerHTML = dateParis;
  
   let timeParis = moment()
   .tz("Europe/Frace")
   .format("hh:mm:ss");
   let timeElement = document.querySelector("#time-paris");
   timeElement.innerHTML = timeParis;

}
 parisTimezone();
 setInterval(parisTimezone, 1000);

 