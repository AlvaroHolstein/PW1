const vm = new Vue({
    el: '#intro',
    data: {
        teams: [
            {name: 'SL Olivais', year: 1910, location: 'Lisboa'},
            {name: 'Amavita', year: 1912, location: 'Lisboa'},
            {name: 'salgueiros', year: 1914, location: 'Porto'}
        ],
        addMore: true
    },
    methods: {
        pushTeam: function(){
            if(this.addMore == true)
            this.teams.push({name: 'varzim', year: 1915, location: 'Póvoa de Varzim'})

            this.addMore = false
        },
        locationFilter: function(){
            console.log('ata')
            this.teams =  this.teams.filter(function(team){
                return team.location == 'Lisboa'
            })
        }
    }

})