
import { observable, action } from 'mobx'

export class HeaderStore {

    @observable isLight =  true
    @observable celsiusType = true

    @observable saveMode = JSON.parse(localStorage.saveMode || "[]" )
    @observable isCelsius = JSON.parse(localStorage.isCelsius || "[]" )


    @action checkLocalStorage = () =>{

        if(this.saveMode !== undefined ){
            this.isLight = this.saveMode
        }

        if(this.isCelsius !== undefined){
            this.celsiusType = this.isCelsius
            
        }
    }

    @action changeMode = () => {
        
        if (this.isLight == true) {
            this.isLight = false
            localStorage.saveMode = this.isLight

        } else {
            this.isLight = true
            localStorage.saveMode = this.isLight
        }
    }


    @action celToFer = (cel) => {
        let fer = Math.round(cel * 1.8 + 32)
        return fer + "°F"
    }


    @action changeTemp = () => {
        if (this.celsiusType) {
            this.celsiusType = false
            localStorage.isCelsius = this.celsiusType

        } else {

            this.celsiusType = true
            localStorage.isCelsius = this.celsiusType

        }
    }

}




export default new HeaderStore()



