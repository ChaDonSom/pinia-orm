<template>
  <q-btn
      v-if="!user"
      round
      icon="r_more_vert"
      flat
      class="lt-sm"
  >
    <q-menu auto-close>
      <q-item
          v-if="$route.path !== '/login'"
          clickable
          to="/login"
      >
        <q-item-section>
          Login
        </q-item-section>
      </q-item>
      <q-item
          v-if="$route.path !== '/register'"
          clickable
          to="/register"
      >
        <q-item-section>
          Register
        </q-item-section>
      </q-item>
    </q-menu>
  </q-btn>
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