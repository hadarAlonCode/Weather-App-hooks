
import { observable, computed, action } from 'mobx'
import axios from 'axios';
import cityData from "../Json/city.json"
import currentWeatherData from "../Json/currentWeather.json"
import fiveDaysData from "../Json/fiveDays.json"


export class CityStore {
    @observable city = ""
    @observable cityKey = 0
    @observable weatherText = ""
    @observable currentTemp = 0
    @observable unit = ""
    @observable fiveDays = []
    @observable icon = "1"
    @observable error = false



    @action getDemiData = () => {
        this.city = cityData[0].LocalizedName
        this.cityKey = cityData[0].Key

        this.weatherText = currentWeatherData[0].WeatherText
        this.currentTemp = currentWeatherData[0].Temperature.Metric.Value
        this.unit = currentWeatherData[0].Temperature.Metric.Unit
        this.icon = currentWeatherData[0].WeatherIcon



        let id = 0

        for (let d of fiveDaysData.DailyForecasts) {
            id++
            this.fiveDays.push({ day: d.Date, minTemp: d.Temperature.Minimum.Value, maxTemp: d.Temperature.Maximum.Value, id: id })
        }
    }


    @action getLocation = async (location) => {

        try {
            this.error = false
            const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=mypsvN2qDB3xSjqqFMTLOhJVTcYfmaZf&q=${location}`)
            this.city = response.data[0].LocalizedName
            this.cityKey = response.data[0].Key

            this.getCurrentWeather()
            this.getFiveDays()
        }
        catch (error) {
            this.error = true
            return error
        }
    }

    @action getCurrentWeather = async () => {


        try {

            const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${this.cityKey}?apikey=mypsvN2qDB3xSjqqFMTLOhJVTcYfmaZf`)
            this.weatherText = response.data[0].WeatherText
            this.currentTemp = response.data[0].Temperature.Metric.Value
            this.unit = response.data[0].Temperature.Metric.Unit
            this.icon = response.data[0].WeatherIcon
        }
        catch (error) {
            this.error = true
            return error
        }
    }

    @action getFiveDays = async () => {

        try {
            const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.cityKey}?apikey=mypsvN2qDB3xSjqqFMTLOhJVTcYfmaZf&metric=true`)
            let id = 0

            for (let d of response.data.DailyForecasts) {
                id++
                this.fiveDays.push({ day: d.Date, minTemp: d.Temperature.Minimum.Value, maxTemp: d.Temperature.Maximum.Value, id: id })
            }
        }
        catch (error) {
            this.error = true
            return error
        }
    }


}




export default new CityStore()



