var submit = document.getElementById('submit');

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

        // City Name 
        location.innerHTML = data.name;
        console.log(data);

        var tempVal = data.main.temp/10;
        var tempVal = parseFloat(tempVal).toFixed(2)
        temp.innerHTML = tempVal;
    })

    .catch(err => alert("wrong City name!"))

})
