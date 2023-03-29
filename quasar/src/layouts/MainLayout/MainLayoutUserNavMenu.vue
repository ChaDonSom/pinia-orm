<template>
  <q-btn
      v-if="user"
      round
      icon="r_more_vert"
      flat
      class="lt-sm"
  >
    <q-menu auto-close>
      <q-item
          v-if="$route.path !== '/home'"
          clickable
          to="/home"
      >
        <q-item-section>
          Home
        </q-item-section>
      </q-item>
      <q-item
          v-if="$route.path !== '/logout'"
          clickable
          @click="$emit('logout')"
      >
        <q-item-section>
          Logout
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

defineEmits(['logout'])
</script>