import { GET } from "../types";
const axios = require('axios');

export const SET_API= async(path, method) =>{
    switch (method) {
        case GET:
            try{
                const response =    await axios.get(path);
                return response.data;
            }catch(err){
                console.info(err);
            }
            break;
        default:
            break;
    }
}