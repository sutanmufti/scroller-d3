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
