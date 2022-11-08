//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
//BONUS Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue 

createApp({
    data(){
        return{
            emailAddList: []
        }
    },
    mounted(){
        for (let i=0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data.response);
                this.emailAddList.push(response.data.response)  
            })
        }
        console.log(this.emailAddList);
    }
}).mount('#app')