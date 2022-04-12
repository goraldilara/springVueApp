
<template>
    <div>
        <h1>Welcome Home!!</h1>
    </div>
    <div>
        <p>
            <router-link to= "/LoginForm">
                Go to the Login Form!!
            </router-link>
        </p>
    </div>
</template>

<script>
import LoginForm from './LoginForm.vue'

export default({
    name: 'Home',
    computed: {
        LoginForm() {
            return '/LoginForm'
        }
    }
})
</script>


