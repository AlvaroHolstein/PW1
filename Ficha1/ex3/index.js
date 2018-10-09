let vm = new Vue({
    el: '#intro',
    data: {
        weight: 1000
    },

    beforeCreate: function() { console.log('Antes de criar') },
    created: function() { console.log('Criado') },
    beforeMount: function() { console.log('Antes de Montar') },
    mounted: function() { console.log('Montado') },
    beforeUpdate: function() { console.log('Antes De update') },
    updated: function() { console.log('Updated') },
    beforeDestroy: function() { console.log('Antes de destruir ') },
    destroyed: function() {console.log('Destruido')}
})