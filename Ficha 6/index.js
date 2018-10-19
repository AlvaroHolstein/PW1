window.onunload = function(){
    localStorage.setItem('tasks', JSON.stringify(vm.tasks))
}

const vm = new Vue({
    el: '#intro',
    data: {
        tarefa: '',
        tasks: [],
        classId: 0,
        type: 'personal',
        filter: 'all'
    },
    created(){
        if(localStorage.getItem('tasks')){
            this.tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    },
    methods: {
        checkId: function () {
            let lastId = 1
            if (this.tasks.length > 0) {
                lastId = parseInt(this.tasks[this.tasks.length - 1].id) + 1
            }
            return lastId
        },

        insertTask: function () {
            console.log(this.tasks)

            //    this.tasks.filter(function(a){
            //         let b = false
            //         if(a.task == this.tarefa) b = true
            //         console.log(b)
            //     })

            let existe = false
            // for(tarefa in this.tasks){
            //     console.log(tarefa.task)
            //     if(tarefa.task == this.tarefa) existe = true
            // }

            for (let i = 0; i < this.tasks.length; i++) {
                console.log(this.tasks[i].task)
                if (this.tasks[i].task == this.tarefa) existe = true
            }
            console.log(existe)

            let data = new Date()
            if (existe == false && this.tarefa != '') {
                this.classId = this.checkId()
                this.tasks.push(
                    {
                        task: this.tarefa,
                        dia: data.toDateString(),
                        id: this.classId.toString(),
                        type: this.type
                    })
                console.log(this.classId)
            }
            else alert('Essa tarefa já existe')
        },

        btn: function(event){
            console.log(event.target.className)
            let idRemove = event.target.className
            console.log(typeof idRemove)

            for(let i=0; i<this.tasks.length; i++){
                if(this.tasks[i].id == idRemove) this.tasks.splice(i, 1)
            }
        },
        filtration: function(){
            return this.tasks.filter(
                (task) => task.type === this.filter || this.filter === 'all'
            )
        }

    }
})