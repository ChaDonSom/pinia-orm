<template>
  <q-page padding>
    <FormKit
        class="column items-center justify-center"
        type="form"
        v-model="form"
    >
      <p class="text-h4">Register</p>
      <FormKit
        :type="fkqInput"
        name="name"
      >
<template #label>Tdsfest dfs</template>
      </FormKit>
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
    </FormKit>
    <pre wrap>{{ form }}</pre>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { axios } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import { createInput, FormKit } from '@formkit/vue'
import FormKitQInput from 'src/components/FormKitQInput.vue'

const fkqInput = createInput(FormKitQInput)

const API_DOMAIN = process.env.API_DOMAIN
const router = useRouter()

const form = ref({})

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
