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
          v-model="name"
          label="Name"
          rounded
      ></q-input>
      <q-input
          outlined
          v-model="email"
          label="Email"
          rounded
          class="q-mt-sm"
      ></q-input>
      <q-input
          outlined
          v-model="password"
          label="Password"
          rounded
          type="password"
          class="q-mt-sm"
      ></q-input>
      <q-input
          outlined
          v-model="passwordConfirmation"
          label="Confirm password"
          rounded
          type="password"
          class="q-mt-sm"
      ></q-input>
      <q-checkbox
          label="Remember me"
          v-model="remember"
      />
      <q-btn
          rounded
          no-caps
          label="Register"
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
import { useRouter } from 'vue-router'

const API_DOMAIN = process.env.API_DOMAIN
const router = useRouter()

const name = ref('Chase')
const email = ref('chase@test.com')
const password = ref('chasetest')
const passwordConfirmation = ref('chasetest')
const remember = ref(true)

axios.get(`${API_DOMAIN}/sanctum/csrf-cookie`)

async function submitRegister() {
  await axios.post(API_DOMAIN + '/register', {
    name: name.value,
    email: email.value,
    password: password.value,
    password_confirmation: passwordConfirmation.value,
    remember: remember.value
  })
  router.replace('/home')
}
</script>
