
let city;
function returnText(){
    let city=document.getElementById("inputbox").value;
    if(city!=null){
        console.log(city);
        var lat;
        var long;
        var cityName=document.querySelector(".city");
        var tempDegree=document.querySelector(".temp");
        var description=document.querySelector(".description")
        var humidityValue=document.querySelector(".humidity");
        var count=document.querySelector(".country");
        const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68ed993c828746cd7f6fc7d23b957239`;

        fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                const{temp}=data.main;
                const loc=data.name;
                const desc=data.weather[0].description;
                const {humidity}=data.main;
                const {country}=data.sys;
                cityName.textContent=loc;
                tempDegree.textContent=Math.round(temp-273);
                description.textContent=desc;
                humidityValue.textContent=humidity;
                count.textContent=country+"/";
            })
    }
    
        
    
}
