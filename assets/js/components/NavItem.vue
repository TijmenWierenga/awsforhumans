<template>
    <li><a itemprop="url" :target="target" :href="href"><span itemprop="name">{{ name }}</span></a></li>
</template>

<script>
    export default {
        props: {
            target: {
                type: String,
                required: false,
                default: ''
            },
            href: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    }
</script>