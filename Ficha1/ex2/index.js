const vm = new Vue({
    el: '#intro',
    data: {
        firstName: 'Álvaro',
        lastName: 'Holstein',
        age: 10000
    },

    methods: {fullName: juntar}
})

function juntar(){
    return `Eu soi ${this.firstName}  ${this.lastName}`
}