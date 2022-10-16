import axios from 'axios'

export  const apicalls = {
    itemcall,
    upcomingcall,
    onecall,
    past
}

async function itemcall (){
    return await axios.get("https://api.spacexdata.com/v3/capsules",).then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err)
    })
}
async function upcomingcall (){
    return await axios.get("https://api.spacexdata.com/v3/capsules/upcoming",).then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err)
    })
}
async function past(){
    return await axios.get("https://api.spacexdata.com/v3/capsules/past",).then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err)
    })
}

async function onecall(){
    return await axios.get("https://api.spacexdata.com/v3/capsules/{{capsule_serial}}").then((res)=>{
        return res
    }).catch((err)=>{
        console.log(err)
    })
}
