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
    :value="props.value"
  >
    <template #default="{ open }">
      <AccordionHeader :class="className.heading()" :data-open="open">
        <AccordionTrigger :data-open="open" :class="className.trigger()">
          <div :class="className.titleWrapper()">
            <span :class="className.title()">{{ props.title }}</span>
          </div>

          <span :data-open="open" :class="className.indicator({ disableAnimation: false })">?</span>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent class="data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-out]">
        <div :class="className.content()">
          <slot />
        </div>
      </AccordionContent>
    </template>
  </RadixAccordionItem>
</template>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: var(--radix-accordion-content-height);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    height: var(--radix-accordion-content-height);
    padding: revert;
  }
  to {
    opacity: 0;
    height: 0;
  }
}
</style>
