
import { observable, computed, action } from 'mobx'
import axios from 'axios';

export class FavoriteStore {

    @observable favoriteCities =  JSON.parse(localStorage.favoriteCities || "[]")

    @action addToFavorites = async ( cityKey , name )=>{
        
        let saveCity = {key: cityKey, name: name, isFavorite: true }

        try {
            const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=mypsvN2qDB3xSjqqFMTLOhJVTcYfmaZf`)
            saveCity.conditions = {
                weatherText: response.data[0].WeatherText,
                currentTemp: response.data[0].Temperature.Metric.Value,
                unit: response.data[0].Temperature.Metric.Unit,
                icon: response.data[0].WeatherIcon,
                date: response.data[0].LocalObservationDateTime     
            }
            this.favoriteCities.push(saveCity)
            localStorage.favoriteCities = JSON.stringify(this.favoriteCities)   
        }
        catch (error) {
            return error
        }
    }

    @action removeFromFavorites = ( cityKey ) => {
        
        this.favoriteCities = this.favoriteCities.filter(c => c.key !== cityKey)
        localStorage.favoriteCities = JSON.stringify(this.favoriteCities)
        
    }

}




export default new FavoriteStore()



