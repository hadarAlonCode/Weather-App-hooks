
import { observable, computed, action } from 'mobx'
import axios from 'axios';

export class FavoriteStore {
    // @observable city =  "tel aviv"
    // @observable score = 0
    // @observable card1 = null
    // @observable card2 = null
    // @observable gameOver = false
    

    // @action newGame = () => {
    //     this.photos = []
    //     this.getCards()
    //     this.score = 0
    //     this.gameOver = false
    // }


    // @action shuffleArray(array) {
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    // }

    // @action addCard(photo) {
    //     if (!this.card1) {
    //         this.card1 = photo
    //     } else {
    //         this.card2 = photo
    //     }


    // }

    // @action getLocation = async (location) => {
    //     const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=mypsvN2qDB3xSjqqFMTLOhJVTcYfmaZf&q=${location}`)

    //     for (let p of response.data) {
    //         this.photos.push({ id: p.id, img: p.urls.small, display: false, win: false })
    //         this.photos.push({ id: p.id + "2", img: p.urls.small, display: false, win: false })
    //     }

    // }

    // @action changeDisplay = (id) => {
    //     let tempPhotos = [...this.photos]
    //     let photo = tempPhotos.find(p => p.id == id)
    //     photo.display = true
    //     this.photos = tempPhotos


    //     setTimeout(() => {

    //         if (this.card2 && this.card1) {
    //             this.checkBingo()
    //             this.card1 = null
    //             this.card2 = null
    //             let gameOver = this.photos.filter(p => p.win == true)

    //             if (gameOver.length == this.photos.length) {
    //                 this.gameOver = true
    //             }
    //         } else {
    //             return
    //         }

    //     }, 3000);


    // }

    // @action changeDisplayToFalse = () => {

    //     let tempPhotos1 = [...this.photos]
    //     for (let photo of tempPhotos1) {
    //         if (photo.win == false && photo.display == true) {
    //             photo.display = false
    //         }
    //     }

    //     this.photos = tempPhotos1

    // }

    // @action changeToWin = () => {
    //     let tempPhotos = [...this.photos]
    //     for (let photo of tempPhotos) {
    //         if (photo.display == true) {
    //             photo.win = true
    //         }
    //     }
    //     this.card1 = null
    //     this.card2 = null
    //     this.photos = tempPhotos
    // }

    // @action checkBingo = () => {

    //     if (this.card1.img === this.card2.img) {
    //         this.score += 10
    //         this.changeToWin()

    //     } else {
    //         this.score -= 2
    //         this.changeDisplayToFalse()

    //     }


    // }
}




export default new FavoriteStore()



