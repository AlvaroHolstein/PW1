window.onunload = function () {
    localStorage.setItem('viagens', JSON.stringify(vm.viagens)) //Só assim é que está a funcionar
}

const vm = new Vue({
    el: '#intro',
    data: {
        viagens: [],
        pais: '',
        continente: '',
        cidadesVisitadas: '', //Isto depois vai ter que ser um array
        descricao: '',
        dataP: 0,
        dataC: 0,
        tipoViagem: 'lazer',
        foto: '',
        indexAlterar: 0,
        showVars: true,
        selectFilter: 'all',
        filter2: '',
        filtro: '',
        // paises: [], //Paises unicos
        // continentes: [], // Continentes unicos
        selectFilterAux: 'all',
        dataCF: 0,
        dataPF: 0
    },
    methods: {
        addTrip() {
            this.viagens.push(
                {
                    id: this.getLastId() + 1,
                    pais: this.pais,
                    continente: this.continente,
                    cidadesVisitadas: this.separateCitys(),
                    descricao: this.descricao,
                    dataP: this.dataP,
                    dataC: this.dataC,
                    tipoViagem: this.tipoViagem,
                    foto: this.foto
                }
            )
            this.recicleVariables()
            //Fazer a orednação por data do array
            this.viagens.sort(function (a, b) {
                a = new Date(a.dataP.toString()).getTime()
                b = new Date(b.dataP.toString()).getTime()
                return b - a
            });
        },
        getLastId() {
            return this.viagens.length > 0 ? this.viagens[this.viagens.length - 1].id : 0
        },
        removerOuVer(id, event) {

            let index = 0
            let btnValue = event.target.innerHTML
            if (btnValue == 'X') {
                this.viagens = this.viagens.filter((viagem) => viagem.id !== id)
            }
            else {
                index = this.viagens.findIndex((viagem) => viagem.id == id) //Importante: FindIndex

                console.log(index)
                this.showVars = false

                this.pais = this.viagens[index].pais
                this.continente = this.viagens[index].continente
                this.cidadesVisitadas = this.viagens[index].cidadesVisitadas
                this.descricao = this.viagens[index].descricao
                this.dataP = this.viagens[index].dataP
                this.dataC = this.viagens[index].dataC
                this.tipoViagem = this.viagens[index].tipoViagem
                this.foto = this.viagens[index].foto

                this.indexAlterar = index

            }
        },
        recicleVariables() {
            this.pais = ''
            this.continente = ''
            this.cidadesVisitadas = '' //Isto depois vai ter que ser um array
            this.descricao = ''
            this.dataP = 0
            this.dataC = 0
            this.tipoViagem = ''
            this.foto = ''
        },
        changeTrip() {


            this.viagens[this.indexAlterar].pais = this.pais
            this.viagens[this.indexAlterar].continente = this.continente
            this.viagens[this.indexAlterar].cidadesVisitadas = this.separateCitys()
            this.viagens[this.indexAlterar].descricao = this.descricao
            this.viagens[this.indexAlterar].dataP = this.dataP
            this.viagens[this.indexAlterar].dataC = this.dataC
            this.viagens[this.indexAlterar].tipoViagem = this.tipoViagem
            this.viagens[this.indexAlterar].foto = this.foto

            this.recicleVariables()
        },
        filteredArray() {
            if (this.selectFilter == 'all') {
                return this.viagens.filter(
                    (viagem) => viagem)
            }
            else if (this.selectFilter == 'continente' && this.filtro != '') {
                if (this.cidadesVisitadas != undefined) {
                    return this.viagens.filter(
                        (viagem) => viagem.continente.includes(this.filtro))
                }
            }
            else if (this.selectFilter == 'pais' && this.filtro != '') {
                return this.viagens.filter(
                    (viagem) => viagem.pais.includes(this.filtro))
            }
            else if (this.selectFilter == 'tipo') {
                return this.viagens.filter(
                    (viagem) => viagem.tipoViagem == this.filter2)
            }
            else if (this.selectFilter == 'data') {
                return this.dateFilter(this.dataPF, this.dataCF)
            }

        },
        search() {
            let start = false
            if (this.selectFilterAux == 'data') {
                if (this.dataCF !== '' && this.dataPF !== '') {
                    start = true
                }
            }
            else if (this.selectFilterAux != 'tipo') {
                if (this.filtro != '') start = true
            }

            else if (this.selectFilterAux != 'all') {
                if (this.filter2 != '') start = true
            }


            if (start) {
                this.selectFilter = this.selectFilterAux
            }
        },
        separateCitys() {
            let cidades = []
            if (this.viagens[this.indexAlterar] !== undefined) {
                cidades = this.cidadesVisitadas.split(',')
                console.log(cidades)
                return cidades
            }
        },
        dateFilter(date1, date2) {
            if (date1 !== '' && date2 != '') {
                date1 = new Date(date1.toString()).getTime()
                date2 = new Date(date2.toString()).getTime()


                let a = this.viagens.filter(
                    (trip) => {
                        if (trip.dataP !== '' && trip.dataC !== '') {
                            return new Date(trip.dataP.toString()).getTime() >= date1 && new Date(trip.dataP.toString()).getTime() <= date2
                        }
                    })
                console.log(a)
                return a
            }
            else {
                return
            }
        }
    },
    watch: {
        filter2: function () {
            // console.log('filter2 = ' + this.filter2)
        },
        selectFilter: function () {
            // console.log('selectFilter = ' + this.selectFilter)
        }
    },
    created() {

        // function escrever(){
        //     localStorage.setItem('viagens', JSON.stringify(this.viagens))
        // }
        // console.log('ata')
        // window.addEventListener('unload', escrever)

        if (localStorage.getItem('viagens')) {
            this.viagens = JSON.parse(localStorage.getItem('viagens'))
        }
    }
})