
let city;
function returnText(){
    let city=document.getElementById("inputbox").value;
    var cityName=document.querySelector(".city");
    var tempDegree=document.querySelector(".temp");
    var description=document.querySelector(".description")
    var humidityValue=document.querySelector(".humidity");
    var count=document.querySelector(".country");
    var icon=document.querySelector("#iconpic");
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68ed993c828746cd7f6fc7d23b957239`;

    fetch(api)
        .then(response=>{
            if(response.ok){
                console.log("Success");
            }
            else{
                alert("Incorrect city name")
            }
            return response.json();
        })
        .then(data=>{
            dat=data;
            const{temp}=data.main;
            const loc=data.name;
            const desc=data.weather[0].description;
            const {humidity}=data.main;
            const {country}=data.sys;
            let iconp=data.weather[0].icon;
            console.log(iconp);
            cityName.textContent=loc;
            tempDegree.textContent=Math.round(temp-273);
            description.textContent=desc;
            humidityValue.textContent=humidity;
            count.textContent=country+"/";
            icon.src=`http://openweathermap.org/img/wn/${iconp}@2x.png`;
        })
}
