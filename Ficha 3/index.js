const vm = new Vue({

    el: '#intro',
    data: {
        person: { firstName: 'Rui', lastName: 'Silva', age: 23 },
        balance: 4432,
        enabled: false
    },

    methods: {
        dataPerson: function () {
            console.log('metodo')
            return `Method --> Nome: ${this.person.firstName}, Idade: ${this.person.age}`
        }
    },

    computed: {
        dataPersonComputed: function () {
            console.log(`Computed --> Nome: ${this.person.firstName}, Idade: ${this.person.age}`)
            return `Computed --> Nome: ${this.person.firstName}, Idade: ${this.person.age}`
        },
        fullNameComputed: function(){
            return `Nome Completo: ${this.person.firstName} ${this.person.lastName}`
        }
    },

    watch: {
        'person.age'(a, b){
            console.log(a, b)
            this.enabled = true
        }
    },

    filters: {
        euros(value){
            return value/100
        }
    },  

    created: function () {
        console.log('Criação')
    },
    mounted: function () {
        console.log('Montagem')
    },
    changed: function () {
        console.log('Atualização')
    }
})