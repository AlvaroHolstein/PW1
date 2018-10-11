const vm = new Vue({
    el:'#intro',
    data: {
        msg: 'A ESMAD é uma escola do IPP',
        showHide: 'Hide',
        style: {
            color: 'black',
            fontSize: '1.5em',
            backgroundColor: 'white'
        },
        visibility: true
    },

    methods: {
        readButton: function(e){
            console.log(e.path[0].innerHTML)
            let button = e.path[0].innerHTML
            if(button == 'Red'){
                this.style.color = 'red'
            }
            else if(button == 'Big'){
                this.style.fontSize = '30pt'
            }
            else if(button == 'Yellow'){
                this.style.backgroundColor = 'yellow'
            }
            else if(button == 'Hide'){
                this.showHide = 'Show'
                this.visibility = false
            }
            else if(button == 'Show'){
                this.showHide = 'Hide'
                this.visibility = true
            }
        }
    }
})