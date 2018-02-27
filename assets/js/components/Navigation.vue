<template>
    <nav class="container mx-auto" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
        <div class="flex items-center justify-between py-2">
            <slot name="logo"></slot>
            <svg @click="toggleMenu" v-show="! visible" class="menu-toggle menu-toggle-open mr-4" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect x="4" y="6" rx="1" ry="1" width="24" height="4"></rect>
                <rect x="4" y="14" rx="1" ry="1" width="24" height="4"></rect>
                <rect x="4" y="22" rx="1" ry="1" width="24" height="4"></rect>
            </svg>
            <svg @click="toggleMenu" v-show="visible" class="menu-toggle menu-toggle-close mr-4" height="32" width="32" version="1.1">
                <line x1="7" y1="7" x2="25" y2="25" style="stroke-width:3"></line>
                <line x1="7" y1="25" x2="25" y2="7" style="stroke-width:3"></line>
            </svg>
        </div>
        <div class="flex flex-grow" v-show="visible">
            <slot name="items" v-show="visible"></slot>
        </div>
    </nav>
</template>

<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                required: true
            },
            toggleMenu: {
                type: Function,
                required: true
            }
        }
    }
</script>