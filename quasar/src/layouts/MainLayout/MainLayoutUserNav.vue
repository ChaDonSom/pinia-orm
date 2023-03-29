<template>
<q-btn
    v-if="user && $route.path !== '/home'"
    to="/home"
    label="Home"
    no-caps
    flat
    rounded
    class="gt-xs"
/>
<q-btn
    v-if="user && $route.path !== '/logout'"
    @click="$emit('logout')"
    label="Logout"
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

defineEmits(['logout'])
</script>