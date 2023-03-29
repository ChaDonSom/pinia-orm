<template>
  <q-page padding>
    <q-form
        class="column items-center justify-center"
        autofocus
        @submit="submitRegister"
    >
      <p class="text-h4">Register</p>
      <q-input
          outlined
          v-model="form.name"
          label="Name"
          rounded
          class="q-mt-sm"
      ></q-input>
      <q-input
          outlined
          v-model="form.email"
          label="Email"
          rounded
          class="q-mt-sm"
      ></q-input>
      <q-input
          outlined
          v-model="form.password"
          label="Password"
          rounded
          type="password"
          class="q-mt-sm"
      ></q-input>
      <q-input
          outlined
          v-model="form.password_confirmation"
          label="Confirm password"
          rounded
          type="password"
          class="q-mt-sm"
      ></q-input>
      <q-checkbox
          label="Remember me"
          v-model="form.remember"
      />
      <q-btn
          rounded
          no-caps
          label="Register"
          color="primary"
          class="q-mt-sm"
          type="submit"
      />
      <pre wrap>{{ form }}</pre>
    </q-form>
  </q-page>
</template>

<script lang="ts" setup>
import { axios } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import Form from 'vform'

const API_DOMAIN = process.env.API_DOMAIN
const router = useRouter()

const form = new Form({
  name: 'Chase',
  email: 'chase@test.com',
  password: 'chasetest',
  password_confirmation: 'chasetest',
  remember: true,
})

axios.get(`${API_DOMAIN}/sanctum/csrf-cookie`)

async function submitRegister() {
  await form.post(API_DOMAIN + '/register')
  router.replace('/home')
}
</script>
