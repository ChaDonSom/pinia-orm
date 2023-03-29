<template>
<q-btn
    v-if="!user && $route.path !== '/login'"
    to="/login"
    label="Login"
    no-caps
    flat
    rounded
    class="gt-xs"
/>
<q-btn
    v-if="!user && $route.path !== '/register'"
    to="/register"
    label="Register"
    no-caps
    flat
    rounded
    class="gt-xs"
/>
</template>

<script lang="ts" setup>
import User from 'src/models/User'
import { PropType } from 'vue'

defineProps({
  user: {
    type: Object as PropType<User>
  },
})
</script>