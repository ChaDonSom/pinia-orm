<script lang="ts" setup>
import { FormKit } from '@formkit/vue'

defineProps({
  context: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <form-kit
    :context="context"
    :sections-schema="{ label: { $el: null, children: ['kjgfh'] } }"
  >
    <!-- <template #wrapper>
      Wrapper
      <q-input
        :modelValue="context._value"
        @update:modelValue="context.node.input($event)"
        outlined
        rounded
        label=""
      >
        <template v-if="context.slots.label" #label>
          <component
            v-for="label of context.slots.label()"
            :is="label"
            :key="label"
          >
          </component>
        </template>
      </q-input>
    </template> -->
  </form-kit>
</template>