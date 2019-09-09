new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function () {
                alert('Alert!');
            },
            storeVal: function() {
                this.value = event.target.value;
                console.log(this.value)
            },
            storeValEnt: function() {
                this.value = event.target.value;
                console.log(this.value)
            }
        }
    });