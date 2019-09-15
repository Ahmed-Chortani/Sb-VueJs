<template>
  <div class="register">
    <div class="row">
        <div class="col-md-6 m-auto">
                <div class="card card-body">
                    <h1 class="text-center mb-3">
                        <i class="fas fa-user-plus"></i> Register
                    </h1>
                    <Partials 
                        v-if="errors.length"
                        :errors="errors"
                    />
                    <form @submit="checkForm" id="addUserForm" method="POST">
                        <div class="form-group">
                        <label for="name">Name</label>
                        <input
                            v-model="name"
                            type="name"
                            id="name"
                            name="name"
                            class="form-control"
                            placeholder="Enter Name"
                            value=""
                        />
                        </div>
                        <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            v-model="email"
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            placeholder="Enter Email"
                            value=""
                        />
                        </div>
                        <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            v-model="pwd"
                            type="password"
                            id="password"
                            name="password"
                            class="form-control"
                            placeholder="Create Password"
                            value=""
                        />
                        </div>
                        <div class="form-group">
                        <label for="password2">Confirm Password</label>
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            class="form-control"
                            placeholder="Confirm Password"
                            value=""
                        />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">
                        Register
                        </button>
                    </form>
                    <p class="lead mt-4">Have An Account? <router-link to="/login">Login</router-link></p>
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Partials from './messages/Partials.vue'
import userService from '../services/userService.js'

export default {
    name: 'register',
    components: {
        Partials
    },
    data() {
        return {
            errors: [],
            name: '',
            email: '',
            pwd: '',
        }
    },
    methods: {
        checkForm: function(e) {
             e.preventDefault();
             if (this.name && this.email && this.pwd) {
                axios.post('/api/user',
                        new FormData(document.getElementById('addUserForm'))
                    ).then(res => {
                        console.log(res)
                    })
            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Name required.');
            }
            if (!this.email) {
                this.errors.push('Email required.');
            }
            if (!this.pwd) {
                this.errors.push('Password required.');
            }

           
        }
    }
}
</script>