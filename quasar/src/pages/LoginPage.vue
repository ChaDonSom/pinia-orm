<template>
  <q-page padding>
    <q-form
        class="column items-center justify-center"
        autofocus
        @submit="axios.post(API_DOMAIN + '/login', { email, password })"
    >
      <q-input
          outlined
          :model-value="email"
          label="Email"
          rounded
      ></q-input>
      <q-input
          outlined
          :model-value="password"
          label="Password"
          rounded
          type="password"
          class="q-mt-sm"
      ></q-input>
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
import { api, axios } from 'src/boot/axios'

const API_DOMAIN = process.env.API_DOMAIN

axios.get(`${API_DOMAIN}/sanctum/csrf-cookie`).then(() => api.get(`${API_DOMAIN}/api/user`))
const email = ref('')
const password = ref('')
</script>
