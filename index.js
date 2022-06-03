const API_KEY = "6e1db7f6143f00121fa0b58865f90408";

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => console.log(response))
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}