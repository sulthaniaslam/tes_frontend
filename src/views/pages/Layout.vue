<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/item">Item</router-link> |
            <router-link to="/customer">Customer</router-link> |
            <router-link to="/sales">Sales</router-link>
        </nav>    

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>