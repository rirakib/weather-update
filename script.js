var submit = document.getElementById('submit');

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();



submit.addEventListener("click",function(){
  var inputInfo = document.getElementById('cityName').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputInfo+ '&appid=cf5cdff3b4a467b51a3602a6628aa26b',
        {
            method:"GET",
        }
    )
    .then(Response => Response.json())
    .then(data=>{
        const temp = document.getElementById('temp');
        const location = document.getElementById('location')
        const country = document.getElementById('country');

        // City Name 
        location.innerHTML = data.name;
        var tempVal = data.main.temp/10;
        var tempVal = parseFloat(tempVal).toFixed(2)
        temp.innerHTML = tempVal;
        var countryVal = data.sys.country;
        country.innerHTML = countryVal;
        console.log(data);
    })

    .catch(err => alert("wrong City name!"))

})
