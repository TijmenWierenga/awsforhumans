<template>
    <div class="alert" v-show="display">
        <div class="alert-content">
            <p class="alert-content-title">{{ title }}</p>
            <p class="alert-content-message">{{ message }}</p>
        </div>
        <div class="alert-dismiss">
            <svg @click="dismiss" height="24" width="24" version="1.1">
                <line x1="4" y1="4" x2="20" y2="20" style="stroke-width:3"></line>
                <line x1="20" y1="4" x2="4" y2="20" style="stroke-width:3"></line>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                display: true
            }
        },
        methods: {
            dismiss() {
                this.display = false;
            }
        }
    }
</script>