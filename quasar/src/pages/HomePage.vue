<template>
  <q-page padding>
    Home page
    <pre>{{ users }}</pre>
  </q-page>
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import User from 'src/models/User'

const userRepo = useRepo(User)
const users = userRepo.all()
</script>
