import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs=";

    const HOT_URL ="../public/hot.jpg";
    const COLD_URL ="../public/cold.jpg";
    const RAIN_URL ="../public/rain.jpeg";
    

    return (
        <div className="InfoBox">
            {/* <h1>Weather Info - {info.weather}</h1> */}

        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     {info.city} {
                     info.humidity > 80 
                        ? <ThunderstormIcon/> 
                        : info.temp > 15 
                        ? <WbSunnyIcon/>
                        : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' } }component={"span"} >
                      <p>Temperature = {info.temp}&deg;C </p>
                      <p>Humidity = {info.humidity} </p>
                      <p>Min Temp = {info.tempMin}&deg;C </p>
                      <p>Max Temp = {info.tempMax}&deg;C </p>
                      <p>
                        The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C
                      </p>
                    </Typography>
                </CardContent>
                
            </Card>
            </div> 

        </div>
    );
}