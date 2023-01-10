// import { data } from "./data/data.js";




const dispatch = d3.dispatch("click");
dispatch.on("click", ()=>{
    console.log("i am clicked!")
    alert("i am clicked!")
})
function clickeeeed () {
    d3.select('#graph').style("color", "green");
    // dispatch.call("click")
}


var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let display = false

function showHide (){
    if (display) {
        d3.select('#map').transition().duration(300).style("opacity", "0"); 
    //     d3.select("main")
    //     .transition().duration(1000)
    //   .style("background-color", "red"); 
    } else {
        d3.select('#map').transition().duration(300).style("opacity", "1");  
    //     d3.select("main")
    //     .transition().duration(1000)
    //   .style("background-color", "bisque"); 
    };
    display = !display
    
}
showHide()
