

const geocode = require("./data.js/geocode") ; 
const forecast = require("./data.js/forecast") ; 

const address = process.argv[2]

geocode(address, (error , data) => {

    console.log("Error is : " , error ) ;
    console.log("Data is : " , data) ;

    if(data){
        forecast(data.longtitude,data.latitude,(error , data) => {

            console.log("Error is : " , error ) ;
            console.log("Data is : " , data) ;
        })
    }else{

        console.log(error)
    }

    
})

