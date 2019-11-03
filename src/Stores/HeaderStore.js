
import { observable, action } from 'mobx'

export class HeaderStore {


    @observable mode = "light_mode"
    @observable colorToggle = true
    @observable celsiusType = true


    @action changeMode = () => {
        if (this.mode == "light_mode") {
            this.mode = "dark_mode"
            this.colorToggle = false
           


        } else {
            this.mode = "light_mode"
            this.colorToggle = true
        }
    }

    @action celToFer = (cel) => {
       let fer =  Math.round(cel * 1.8 + 32) 
       return fer +"°F"
    }

    @action changeTemp = () => {
        if(this.celsiusType){
            this.celsiusType = false
        } else{
            this.celsiusType = true  
        }
     }

}




export default new HeaderStore()



