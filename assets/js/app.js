require('../css/app.scss');

import Vue from 'vue';
import Navigation from './components/Navigation';

new Vue({
    el: "#app",
    components: {
        Navigation
    },
    data: {
        'menuVisible': false,
        'windowWidth': null
    },
    computed: {
        displayMenu() {
            if (this.windowWidth > 992) return true;

            return this.windowWidth < 992 && this.menuVisible;
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.getWindowWidth)
        });

        this.windowWidth = window.innerWidth;
    },
    methods: {
        toggleMenu() {
            this.menuVisible = ! this.menuVisible;
        },
        getWindowWidth(event) {
            this.windowWidth = event.currentTarget.innerWidth;
        }
    }
});