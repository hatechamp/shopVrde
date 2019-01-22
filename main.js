
let discounts = [
    { amount: "1", price: 55 },
    { amount: "2", price: 52.50 },
    { amount: "3", price: 50 },
    { amount: "4", price: 47.50 },
    { amount: "5-59", price: 45 },
    { amount: "60-199", price: 41 },
    { amount: "200-249", price: 36 },
    { amount: "250+", price: 32 }
]

let products = [
    { name: 'Tomate (Kg)', amount: 0, url: 'images/tomate.jpg', type: 'veggie' },
    { name: 'Acelga (PAQ)', amount: 0, url: 'images/acelga.jpg', type: 'veggie' },
    { name: 'Zanahoria (PAQ)', amount: 0, url: 'images/zanahoria.jpg', type: 'veggie' },
    { name: 'Remolacha (PAQ)', amount: 0, url: 'images/remolacha.jpg', type: 'veggie' },
    { name: 'Rucula (PAQ)', amount: 0, url: 'images/rucula.jpg', type: 'veggie' },
    { name: 'Papa (Kg)', amount: 0, url: 'images/papa.jpg', type: 'veggie' },
    { name: 'Choclo x 3', amount: 0, url: 'images/choclo.jpg', type: 'veggie' },
    { name: 'Morron (Kg)', amount: 0, url: 'images/morron.jpg', type: 'veggie' },
    { name: 'Perejil (Kg)', amount: 0, url: 'images/perejil.jpg', type: 'veggie' },
    { name: 'Aji Vinagre (1/2 Kg)', amount: 0, url: 'images/ajivinagre.jpg', type: 'veggie' },
    { name: 'Nabo (Kg)', amount: 0, url: 'images/nabo.jpg', type: 'veggie' },
    { name: 'Repollo (Unidad)', amount: 0, url: 'images/repollo.jpg', type: 'veggie' },
    { name: 'Zapallito (Kg)', amount: 0, url: 'images/zapallito.jpg', type: 'veggie' },
    { name: 'Zuchinni (Kg)', amount: 0, url: 'images/zuchinni.jpg', type: 'veggie' },
    { name: 'Pack Choi (PAQ)', amount: 0, url: 'images/packchoi.jpg', type: 'veggie' },
    { name: 'Pepino (Kg)', amount: 0, url: 'images/pepino.jpg', type: 'veggie' },
    { name: 'Verdeo (PAQ)', amount: 0, url: 'images/verdeo.jpg', type: 'veggie' },
    { name: 'Puerro (PAQ)', amount: 0, url: 'images/puerro.jpg', type: 'veggie' },
    { name: 'Anco (Unidad)', amount: 0, url: 'images/anco.jpg', type: 'veggie' },
    { name: 'Kale (PAQ)', amount: 0, url: 'images/kale.jpg', type: 'veggie' },
    { name: 'Lima (1/2 Kg)', amount: 0, url: 'images/lima.jpg', type: 'veggie' },
    { name: 'Rabanito (PAQ)', amount: 0, url: 'images/rabanito.jpg', type: 'veggie' },
    { name: 'Brocoli (Unidad)', amount: 0, url: 'images/brocoli.jpg', type: 'veggie' },
    { name: 'Lechuga (1/2kg)', amount: 0, url: 'images/lechuga.jpg', type: 'veggie' },
    { name: 'Hinojo (Kg)', amount: 0, url: 'images/hinojo.jpg', type: 'veggie' },
    { name: 'Banana (Kg)', amount: 0, url: 'images/banana.jpg', type: 'fruit', price: 70 },
    { name: 'Ciruela (Kg)', amount: 0, url: 'images/ciruela.jpg', type: 'fruit', price: 70 },
    { name: 'Uva (Kg)', amount: 0, url: 'images/uva.jpg', type: 'fruit', price: 115 },
    { name: 'Melon (Kg)', amount: 0, url: 'images/melon.jpg', type: 'fruit', price: 70 },
    { name: 'Durazno (Kg)', amount: 0, url: 'images/durazno.jpg', type: 'fruit', price: 70 }
]

var app = new Vue({
    el: '#app',
    data: {
        title: 'VERDURA Y FRUTA ORGANICA',
        search: "",
        price: 55,
        discounts: discounts,
        productList: products,
        cartTotal: 0,
        cart: [],
        cartItems: 0
    },
    methods: {
        submit: function () {
            this.$refs.form.submit()
        },
        getTotal: function () {
            var self = this;
            this.cartTotal = 0;
            this.cartItems = 0;

            this.cart = this.productList.filter(function (item) {
                return item.total > 0;
            });

            for (var item in this.cart) {
                if (this.cart[item].type == 'veggie')
                    this.cartItems += this.cart[item].amount;
            }

            if (this.cartItems <= 1) { this.price = 55 }
            else if (this.cartItems == 2) { this.price = 52.50 }
            else if (this.cartItems == 3) { this.price = 50 }
            else if (this.cartItems == 4) { this.price = 47.50 }
            else if (this.cartItems >= 5 && this.cartItems <= 59) { this.price = 45 }
            else if (this.cartItems >= 60 && this.cartItems <= 199) { this.price = 41 }
            else if (this.cartItems >= 200 && this.cartItems <= 249) { this.price = 36 }
            else { this.price = 32 }

            for (var item in this.cart) {
                if (this.cart[item].type == 'fruit') {
                    this.cart[item].total = this.cart[item].amount * this.cart[item].price;
                    this.cart[item].total = parseFloat(this.cart[item].total.toFixed(2))
                } else {
                    this.cart[item].price = this.price;
                    this.cart[item].total = this.cart[item].amount * this.price;
                }
                this.cartTotal += this.cart[item].total;
                this.cartTotal = parseFloat(this.cartTotal.toFixed(2))
            }

        },
        addItem: function (item) {
            item.amount++;
            if (item.price) {
                item.total = item.amount * item.price;
            } else {
                item.total = item.amount * this.price;
            }
            this.getTotal();
        },
        removeItem: function (item) {
            if (item.amount > 0) {
                item.amount--;
            }
            if (item.price) {
                item.total = item.amount * item.price;
            } else {
                item.total = item.amount * this.price;
            }
            this.getTotal();
        },
        updateValue: function (item) {
            if (item.amount == "" || parseFloat(item.amount) == NaN) { item.amount = 0 }
            else (item.amount = parseFloat(item.amount))
            if (item.price) {
                item.total = item.amount * item.price;
            } else {
                item.total = item.amount * this.price;
            }
            this.getTotal();
        },
        saveSale: function (cart) {
            console.log(cart)
            var today = new Date().toLocaleDateString('es-GB', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            }).split('/').join('-');

            var sale = [];

            for (var item in cart) {
                sale.push({
                    Fecha: today
                },
                    {
                        variedad: cart[item].name,
                        cantidad: cart[item].amount,
                        precio: cart[item].price || this.price,
                        pago: cart[item].total
                    })
            }

            console.log(sale)

            database.ref('/' + today).push(sale, function (error) {
                if (error) {
                    console.log("error")
                } else {
                    console.log("saved")
                    window.location.reload();
                }
            });
        }

    },
    computed: {
        filteredItems: function () {
            var self = this;
            return this.productList.filter(function (item) {
                return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
            });
        }

    }
})