<template>
    <div id="headerr">
        <b-nav>
            <router-link to="/"><b-nav-item disabled>Home</b-nav-item></router-link>
            <router-link to="/about"><b-nav-item disabled>About</b-nav-item></router-link>
            <router-link to="/register"><b-nav-item disabled>Register</b-nav-item></router-link>
            <router-link to="/login"><b-nav-item disabled>Login</b-nav-item></router-link>
        </b-nav>
        <router-view/>
    </div>
</template>
<script>
export default {
  name: 'headerr'
}
</script>