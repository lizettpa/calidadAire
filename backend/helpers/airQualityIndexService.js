const https = require('https');

const getAirQualityIndexFromUSB = () =>{
    return Math.random()*100; //0,0 - 1 Random
}

const getAirQualityIndexFromThirdPartyService = ()=>{
    return new Promise((resolve, reject)=>{
        try{
            https.get('https://api.waqi.info/search/?token=73da79fda91bd552c41f67df4f17676f148ea867&keyword=bogota',(res)=>{
                res.on('data',(chunk)=>{
                    let dataJSON = JSON.parse(chunk)
                    // let dataLocalidades = dataJSON.data
                    // let dataDeMiLocalidad = dataLocalidades.find((localidad=>{return localidad.uid ==6230}))
                    resolve(dataJSON)
                })
            })
        }catch{
            reject('Ocurrió un error en la obtención del body')
        }
    }).then((data)=>{return data}).catch((err)=>{return err})
}

module.exports = {
    getAirQualityIndexFromUSB,
    getAirQualityIndexFromThirdPartyService
}