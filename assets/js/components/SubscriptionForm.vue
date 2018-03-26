<template>
    <form class="w-full flex flex-row">
        <input class="flex-grow p-2 mr-2 rounded" type="email" placeholder="email" v-model="form.values.email" required>
        <input
                class="btn border-2 border-purple-lightest text-purple-lightest bg-transparent"
                type="submit"
                @click.prevent="submitForm"
                value="Subscribe">
    </form>
</template>

<script>
    import Form  from './Form.js';

    export default {
        data() {
            return {
                form: new Form(["email"]),
            }
        },
        methods: {
            submitForm() {
                this.form.submit("subscribe");
            }
        }
    }
</script>