const vm = new Vue({
    el: '#intro',
    data: {
        productName: "Computador Titan W599",
        productDesc: "Processador i7 <br> Disco SSD 256GB <br> Monitor Samsung 21",
        productImage: 'https://www.titancomputers.com/v/vspfiles/photos/W599-7.jpg',
        productPrice: 1200,
        productAvailability: true,
        productQuantity: 2
    },
    
    methods: {
        originalPrice: function () {
            this.productPrice = 1200
        },

        checkProduct: function () {
            if (this.productQuantity > 0) this.productQuantity--

            if (this.productQuantity == 0) this.productAvailability = false
        }
    },

    updated: function () {
        if (this.productQuantity == 0) this.productAvailability = false
        else this.productAvailability = true
        console.log('updated')
    }
})