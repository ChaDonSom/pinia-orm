<template>
  <q-page padding>
    <q-form
        class="column items-center justify-center"
        autofocus
        @submit="submitLogin"
    >
      <p class="text-h4">Log in</p>
      <q-input
          outlined
          v-model="form.email"
          label="Email"
          rounded
      ></q-input>
      <q-input
          outlined
          v-model="form.password"
          label="Password"
          rounded
          type="password"
          class="q-mt-sm"
      ></q-input>
      <q-checkbox label="Remember me" v-model="form.remember" />
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
import { Form } from 'vform'
import { useRouter } from 'vue-router'
import { user } from 'src/stores/auth'

const API_DOMAIN = process.env.API_DOMAIN
const router = useRouter()

const form = new Form({
  email: '',
  password: '',
  remember: false,
})

axios.get(`${API_DOMAIN}/sanctum/csrf-cookie`)

async function submitLogin() {
  await form.post(API_DOMAIN + '/login')
  user.value = (await api.get('/user')).data
  router.replace('/home')
}
</script>
