const vm = new Vue({
    el: '#intro',
    data: {
        msg: 'Programação Web I',
        // mostrar: false
        cont: 0
    },
    methods: {
        mostrarMsg: function(event){
            alert(this.msg)
            console.log(event.type)
            console.log(event.srcElement.nodeName)
            console.log(event.target.tagName)
        },
        mostrarMsg2: function(mensagem, evento){
            console.log(mensagem)
            console.log(evento)
        },
        showMessage: function(event){
            console.log(event.srcElement.nodeName)
            this.cont++
            console.log(this.cont)
        }
    }
})