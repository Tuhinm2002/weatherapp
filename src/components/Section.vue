<template>
    <div class="boxes" id="boxes">
        <div class="box1" id="temperature">
            <div class="temp">
               Temp. {{ temp }}
                <br>
               Max Temp. {{ max_temp }}
                <br>
               Min Temp. {{ min_temp }}
            </div>
            <div class="tempPic">
                <img v-if="temp > 35" src="../assets/images/sunny1.jpg" alt="" srcset="" />
                <img v-if="temp < 15" src="../assets/images/snow1.jpg" alt="" srcset="" />
                <img v-if="temp > 15 && temp < 35" src="../assets/images/rainy1.jpg" alt="" srcset="" />
            </div>
        </div>

        <div class="box2" id="humidity">
            <div class="humidPic" >
                <img v-if="temp > 35" src="../assets/images/sunny2.jpg" alt="" srcset="" />
                <img v-if="temp < 15" src="../assets/images/snow2.jpg" alt="" srcset="" />
                <img v-if="temp > 15 && temp < 35" src="../assets/images/rainy2.jpg" alt="" srcset="" />
            </div>
            <div class="humid">
                Humidity {{ humidity }}
                <br>
                Cloud Pct. {{ cloud_pct }}
                <br>
                Feels Like {{ feels_like }}
            </div>
        </div>

        <div class="box3" >
            <div class="winds" id="wind">
                Wind Speed {{ wind_speed }}
                <br>
                Sunrise {{ sunrise }}
                <br>
                Sunset {{ sunset }}
            </div>
            <div class="windsPic">
                <img v-if="cloud_pct > 50" src="../assets/images/rainy3.jpg" alt="" srcset="" />
                <img v-if="cloud_pct < 30" src="../assets/images/snow3.jpg" alt="" srcset="" />
                <img v-if="cloud_pct > 30 && cloud_pct < 50" src="../assets/images/sunny3.jpg" alt="" srcset="" />
            </div>
        </div>
</div>
</template>

<script>
import '../assets/styles/style.css';
import "../assets/images/rainy1.jpg";


export default{
    props:["temp","feels_like","cloud_pct","max_temp","min_temp",
"humidity","sunrise","sunset","wind_speed",],
data(){
    return{
        weather:0,
        images:[
            "../assets/images/rainy1.jpg",
           "../assets/images/rainy2.jpg",
            "../assets/images/rainy3.jpg",
            "../assets/images/sunny1.jpg",
            "../assets/images/sunny2.jpg",
            "../assets/images/sunny3.jpg",
            "../assets/images/snowy1.jpg",
            "../assets/images/snowy2.jpg",
            "../assets/images/snowy3.jpg"
    ]
    }
}
}
</script>