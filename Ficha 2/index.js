window.onload = function () {

    let numb = 0
    if(this.localStorage.getItem('number')){
        numb = localStorage.getItem('number') //json.parse
        console.log(numb)
    } 

    const vm = new Vue({
        el: '#intro',
        data: {
            number: numb,
            t1: 0,
            t2: 0,
            disabled: true
        },

        methods: {
            buttons: function (e) {
                //console.log(e.path[0].innerHTML)
                let simbol = e.path[0].innerHTML
                if (simbol == '+') {
                    this.number++
                }
                else {
                    if (this.number > 0) this.number--

                    if (this.number == 0) this.disabled = true
                }
            }
        },

        created: function () {
            console.log('A instãncia Vue foi criada')
            if (this.number == 0) this.disabled = true
            else this.disabled = false

            // this.t1 = performance.now()
            // console.log(this.t1)
        },
        mounted: function () {
            console.log('A instãncia Vue foi montada')


            // this.t2 = performance.now()
            // console.log(this.t2)
            // console.log(`Demorou ${this.t2-this.t1} entre created e mounted`)
        },
        updated: function () {
            console.log('Changed')
            if (this.number == 0) this.disabled = true
            else this.disabled = false

            localStorage.setItem('number', JSON.stringify(this.number))
        }
    })
}