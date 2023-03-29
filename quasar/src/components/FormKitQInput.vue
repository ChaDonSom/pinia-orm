<script lang="ts" setup>
defineProps({
  context: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <q-input
    :modelValue="context._value"
    @update:modelValue="context.node.input($event)"
    outlined
    rounded
    label=""
  >
    <template v-if="context.label" #label>
      <div v-html="context.label"></div>
    </template>
  </q-input>
</template>