<template>
  <q-page padding>
    <q-form
        class="column items-center justify-center"
        autofocus
        @submit="axios.post(API_DOMAIN + '/login', { email, password, remember })"
    >
      <p class="text-h4">Log in</p>
      <q-input
          outlined
          v-model="email"
          label="Email"
          rounded
      ></q-input>
      <q-input
          outlined
          v-model="password"
          label="Password"
          rounded
          type="password"
          class="q-mt-sm"
      ></q-input>
      <q-checkbox label="Remember me" v-model="remember" />
      <q-btn
          rounded
          no-caps
          label="Log in"
          color="primary"
          class="q-mt-sm"
          type="submit"
      />
    </q-form>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { axios } from 'src/boot/axios'

const API_DOMAIN = process.env.API_DOMAIN

axios.get(`${API_DOMAIN}/sanctum/csrf-cookie`)
const email = ref('')
const password = ref('')
const remember = ref(false)
</script>
