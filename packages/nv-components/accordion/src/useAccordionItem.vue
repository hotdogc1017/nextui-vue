<script lang="ts" setup>
import { computed } from 'vue'
import { accordionItem } from '@nextui-org/theme'
import { AccordionContent, AccordionHeader, AccordionTrigger, AccordionItem as RadixAccordionItem } from 'radix-vue'
import type { AccordionItemProps, AccordionItemStyleProps } from './accordion'

const props = defineProps<AccordionItemProps>()

const className = computed(() => {
  const config: AccordionItemStyleProps = {
    ...(props.ui),
  }

  return accordionItem(config)
})
</script>

<template>
  <RadixAccordionItem
    :as-child="true"
    :class="className"
    :value="props.value"
  >
    <AccordionHeader :class="className">
      <AccordionTrigger>
        <slot name="title">
          <span>{{ props.title }}</span>
        </slot>

        <slot name="icon">
          <span>></span>
        </slot>
      </AccordionTrigger>
    </AccordionHeader>

    <AccordionContent :class="className">
      <slot />
    </AccordionContent>
  </RadixAccordionItem>
</template>

<style scoped></style>
