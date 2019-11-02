
import { observable, action } from 'mobx'
import axios from 'axios';
import cityData from "../Json/city.json"
import currentWeatherData from "../Json/currentWeather.json"
import fiveDaysData from "../Json/fiveDays.json"
import { cpus } from 'os';


export class CityStore {

    api_key = "mypsvN2qDB3xSjqqFMTLOhJVTcYfmaZf"
    @observable city = { name: "", cityKey: 0, weatherText: "", currentTemp: 0, unit: "", fiveDays: [], icon: "1", isFavorite: false, date: "" }
    @observable error = false


    @action getDemiData = () => {
        this.city.name = cityData[0].LocalizedName
        this.city.cityKey = cityData[0].Key
        this.city.weatherText = currentWeatherData[0].WeatherText
        this.city.currentTemp = currentWeatherData[0].Temperature.Metric.Value
        this.city.unit = currentWeatherData[0].Temperature.Metric.Unit
        this.city.icon = currentWeatherData[0].WeatherIcon
        this.city.date = currentWeatherData[0].LocalObservationDateTime
        this.city.isFavorite = this.localFavorite(cityData[0].Key)



        let id = 0

        for (let d of fiveDaysData.DailyForecasts) {
            id++
            this.city.fiveDays.push({ day: d.Date, minTemp: d.Temperature.Minimum.Value, maxTemp: d.Temperature.Maximum.Value, id, icon: d.Day.Icon  })
        }
    }


    @action getLocation = async (location) => {

        try {
            this.error = false
            const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.api_key}&q=${location}`)
            this.getCurrentWeather(response.data[0].LocalizedName, response.data[0].Key)

            return true
        }
        catch (error) {

            return false
        }
    }

    @action getCurrentWeather = async (name, key) => {
console.log(name)
console.log(key)
        try {
            this.error = false
            const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${this.api_key}`)
            this.city.name = name
            this.city.cityKey = key
            this.city.weatherText = response.data[0].WeatherText
            this.city.currentTemp = response.data[0].Temperature.Metric.Value
            this.city.unit = response.data[0].Temperature.Metric.Unit
            this.city.icon = response.data[0].WeatherIcon
            this.city.date = response.data[0].LocalObservationDateTime
            this.city.isFavorite = this.localFavorite(this.city.cityKey)
            this.getFiveDays()
        }
        catch (error) {
            // this.error = true
            return error
        }
    }

    @action getFiveDays = async () => {

        try {
            const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.city.cityKey}?apikey=${this.api_key}&metric=true`)
            let id = 0
            this.city.fiveDays = []

            for (let d of response.data.DailyForecasts) {
                id++
                this.city.fiveDays.push({ day: d.Date, minTemp: d.Temperature.Minimum.Value, maxTemp: d.Temperature.Maximum.Value, id: id, icon: d.Day.Icon })
            }
        }
        catch (error) {
            // this.error = true
            return error
        }
    }

    @action favorite = () => {
        this.city.isFavorite ? this.city.isFavorite = false : this.city.isFavorite = true
    }

    @action localFavorite = (key) => {
        if (localStorage.favoriteCities) {
            let local_Storage = JSON.parse(localStorage.favoriteCities)
            let city = local_Storage.find(c => c.key == key)

            if (city) {
                return true

            } else {
                return false
            }

        } else {
            return false

        }
    }
}



export default new CityStore()



