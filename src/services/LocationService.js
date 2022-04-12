import axios from 'axios'
import { routerKey } from 'vue-router';

const LOCATION_API_BASE_URL = 'http://localhost:8090/locations'

class LocationService{
    getLocations(){
        return axios.get(LOCATION_API_BASE_URL);
    }
    addLocations(locationForm){
        console.log("servis fonksiyonu")
        console.log(locationForm)
        return axios
        .post(LOCATION_API_BASE_URL + "/create", locationForm)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          // error.response.status Check status code
        })
        .finally(() => {
          console.log(locationForm);
          //Perform action in always
        });
    }
}

export default new LocationService()