<template>
  <q-page padding>
    Home page
    <pre>{{ users }}</pre>
    <pre>{{ user }}</pre>
    <pre>{{ orionUsers }}</pre>
  </q-page>
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import UserModel from 'src/models/User'
import { Orion } from "@tailflow/laravel-orion/lib/orion"
import { Model } from "@tailflow/laravel-orion/lib/model"
import { api } from 'boot/axios'
import { ref, onMounted, computed } from 'vue'
import { AuthDriver } from '@tailflow/laravel-orion/lib/drivers/default/enums/authDriver';

const API_DOMAIN = process.env.API_DOMAIN ?? ''

onMounted(async () => {
  Orion.init(API_DOMAIN)
  Orion.setAuthDriver(AuthDriver.Sanctum)
  // Orion.setToken('access-token-here')
  // await Orion.getToken()
  orionUsers.value = await User.$query().get()
  userRepo.save(orionUsers.value.map(orionUser => orionUser.$attributes))
})

class User extends Model<{
  name: string,
  email: string,
}> {
  public $resource(): string {
    return 'users'
  }
}

const userRepo = useRepo(UserModel)
const users = computed(() => userRepo.all())
const orionUsers = ref<User[]|null>(null)
const user = ref(null)
onMounted(async () => {
  user.value = (await api.get('/user')).data
})
</script>
