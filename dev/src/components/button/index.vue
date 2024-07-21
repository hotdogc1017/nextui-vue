<script lang="ts" setup>
import { ref } from 'vue'
import type { ButtonVariantProps } from '@nextui-org/theme'
import { button } from '@nextui-org/theme'
import type { NVButtonProps } from './types'

const props = defineProps<NVButtonProps>()

const config: ButtonVariantProps = {
  size: 'sm',
  color: 'primary',
  radius: 'sm',
  fullWidth: false,
  isDisabled: false,
  isInGroup: false,
  disableAnimation: false,
  isIconOnly: false,
}
const className = button(config)

const hover = ref(true)
const click = ref(true)

function focus() {
  click.value = true
}

function blur() {
  click.value = false
}
</script>

<template>
  <button :data-pressed="click ? true : null" :data-hover="hover ? true : null" :class="className" v-bind="props" @mouseup="blur" @mousedown="focus" @mouseenter="hover = true" @mouseleave="hover = false">
    <slot />
  </button>
</template>

<style scoped>

</style>
