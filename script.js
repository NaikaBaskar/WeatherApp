var cityName=document.querySelector('.cityName');
var city=document.getElementById('city');
var temp=document.getElementById('temperature');
var clouds=document.getElementById('clouds');
var desc=document.getElementById('description');
var button=document.getElementById('btn');

button.addEventListener('click',function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=e74c67c1a24145a0500c3dacc5f7a75d')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue=data['name'];
        var descValue=data['weather'][0]['description'];
        var cloudsValue=data['clouds']['all'];
        // console.log(tempValue+" "+nameValue);

        city.innerHTML = nameValue;
        temp.innerHTML = "Temperature : "+tempValue;
        desc.innerHTML = "Description : "+descValue;
        clouds.innerHTML= "Clouds : "+cloudsValue;
        cityName.value="";
    })
    .catch(err => alert("Wrong city name"));
})
