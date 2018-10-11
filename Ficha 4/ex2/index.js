const vm = new Vue({
    el: '#intro',
    data:{
        schools: ['ESMAD', 'ISEp', 'ESE', 'ISCAP', 'ESTG', 'ESS', 'ESHT']
    },
    methods:{
        addSchool: function (school){
            this.schools.push(school)
        }
    },

    mounted: function(){
        this.addSchool('ESMAE')
    }
})

// vm.addSchool('ESMAE')
