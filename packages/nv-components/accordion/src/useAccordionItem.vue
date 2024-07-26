<script lang="ts" setup>
import { computed } from 'vue'
import { accordionItem } from '@nextui-org/theme'
import { AccordionContent, AccordionHeader, AccordionTrigger, AccordionItem as RadixAccordionItem } from 'radix-vue'
import type { AccordionItemProps, AccordionItemStyleProps } from './accordion'
import { Motion, Presence } from "@oku-ui/motion"

const props = defineProps<AccordionItemProps>()

const className = computed(() => {
  const config: AccordionItemStyleProps = {
    ...(props.ui),
  }

  return accordionItem(config);
})
</script>

<template>
  <RadixAccordionItem
    :value="props.value"
  >
    <template #default="{open}">
      <AccordionHeader :class="className.heading()" :data-open="open">
        <AccordionTrigger :data-open="open" :class="className.trigger()">
          <div :class="className.titleWrapper()">
            <span :class="className.title()">{{ props.title }}</span>
          </div>

          <span :data-open="open" :class="className.indicator({disableAnimation: false})"><</span>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent data-test="true" :class="className.content()" class="h-fit">
        <Presence>
          <Motion v-show="open" :animate="{opacity: 1, height: 'var(--radix-accordion-content-height)'}" :initial="{opacity: 0, height: 0}" :exit="{ opacity: 0, height: 0 }">
            <slot />
          </Motion>
        </Presence>
      </AccordionContent>
      
    </template>
  </RadixAccordionItem>
</template>

<style scoped></style>
