
const request = require("request") ;

const forecast = (longtitude , latitude , callback)=>{

    const forecastUrl = "http://api.weatherapi.com/v1/current.json?key=6b8958b688614b8997b170933231707 &q="+longtitude +","+latitude

    request ({ url : forecastUrl , json : true} , (error , response)=>{

        if(error){
    
            callback("Error cannot connect website " , undefined)

        }
        else if(response.body.error){

            callback(response.body.error.message , undefined)
        }
        
        else{
            callback( undefined , "Country is : " + response.body.location.name + " and weather is : "+ response.body.current.condition.text + " temp is " + response.body.current.temp_c)
        }
    })
    }
        

    module.exports = forecast ;