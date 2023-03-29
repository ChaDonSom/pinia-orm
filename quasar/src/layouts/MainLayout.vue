<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
        elevated
        reveal
    >
      <q-toolbar>
        <q-toolbar-title>Pinia ORM</q-toolbar-title>
        <q-space />
        <main-layout-guest-nav      :user="user" />
        <main-layout-guest-nav-menu :user="user" />
        <main-layout-user-nav       :user="user" @logout="logout" />
        <main-layout-user-nav-menu  :user="user" @logout="logout" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { api, axios } from 'src/boot/axios'
import MainLayoutGuestNavMenu from 'src/layouts/MainLayout/MainLayoutGuestNavMenu.vue'
import MainLayoutGuestNav from 'src/layouts/MainLayout/MainLayoutGuestNav.vue'
import MainLayoutUserNavMenu from 'src/layouts/MainLayout/MainLayoutUserNavMenu.vue'
import MainLayoutUserNav from 'src/layouts/MainLayout/MainLayoutUserNav.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { user } from 'src/stores/auth'
import { isAxiosError } from 'axios'

onMounted(async () => {
  user.value = (await api.get('/user')).data
})

const router = useRouter()
const API_DOMAIN = process.env.API_DOMAIN
axios.get(`${API_DOMAIN}/sanctum/csrf-cookie`)
async function logout() {
  await axios.post(API_DOMAIN + '/logout')
  try {
    user.value = (await api.get('/user')).data
  } catch (e) {
    if (isAxiosError(e) && e.response?.status === 401) {
      user.value = undefined
    }
    router.replace('/')
  }
}
</script>