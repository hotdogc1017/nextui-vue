<script setup lang="ts">
import { computed } from 'vue'
import { AccordionRoot, Slot } from 'radix-vue'
import { accordion } from '@nextui-org/theme'
import useAccordionItem from './useAccordionItem.vue'
import type { AccordionProps, AccordionStyleProps } from './accordion'

const props = defineProps<AccordionProps>()

const className = computed(() => {
  const config: AccordionStyleProps = {
    ...props.ui,
    variant: 'bordered',
  }
  return accordion(config)
})
</script>

<template>
  <AccordionRoot
    :class="className"
    default-value="item-1"
    type="single"
    :collapsible="true"
  >
    <slot />
  </AccordionRoot>
</template>
