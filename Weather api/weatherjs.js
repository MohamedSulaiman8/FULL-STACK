window.addEventListener('load',()=>{
    var lat;
    var long;
    var cityName=document.querySelector(".city");
    var tempDegree=document.querySelector(".temp");
    var description=document.querySelector(".description");
    errorCallback=()=>{
        alert("Location permission is required to provide the weather details")
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            lat=position.coords.latitude;
            long=position.coords.longitude;
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=68ed993c828746cd7f6fc7d23b957239`;

            fetch(api)
                .then(response=>{
                    return response.json();
                })
                .then(data=>{
                    const{temp}=data.main;
                    const loc=data.name;
                    const desc=data.weather[0].description;
                    cityName.textContent=loc;
                    tempDegree.textContent=Math.round(temp-273);
                    description.textContent=desc;
                })
        },errorCallback)
    }
})