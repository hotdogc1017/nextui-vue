<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { ButtonVariantProps } from '@nextui-org/theme'
import { button } from '@nextui-org/theme'
import type { ButtonProps } from './button'

const props = defineProps<ButtonProps>()

const hover = ref(true)
const click = ref(true)

const className = computed(() => {
  const config: ButtonVariantProps = {
    variant: props.type,
    size: 'sm',
    color: 'primary',
    radius: 'sm',
    fullWidth: false,
    isDisabled: props.disabled,
    isInGroup: false,
    disableAnimation: false,
    isIconOnly: false,
  }

  return button(config)
})

function focus() {
  click.value = true
}

function blur() {
  click.value = false
}
</script>

<template>
  <button
    :data-pressed="click ? true : null"
    :data-hover="hover ? true : null"
    :class="className"
    v-bind="props"
    @mouseup="blur"
    @mousedown="focus"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <slot />
  </button>
</template>

<style scoped>

</style>
