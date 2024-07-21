<script lang="ts" setup>
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
</script>

<template>
  <button :class="className" v-bind="props">
    <slot />
  </button>
</template>

<style scoped>

</style>
