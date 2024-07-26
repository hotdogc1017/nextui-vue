import type { AccordionGroupVariantProps, AccordionItemSlots, AccordionItemVariantProps } from '@nextui-org/theme'
import type { AccordionItemProps as RadixAccordionItemProps, AccordionRootProps as RadixAccordionProps } from 'radix-vue'

export interface AccordionStyleProps extends AccordionGroupVariantProps {

}

export interface AccordionItemStyleProps extends AccordionItemVariantProps {

}

export interface AccordionProps extends RadixAccordionProps {
  ui?: AccordionStyleProps
}

export interface AccordionItemProps extends RadixAccordionItemProps {
  title: string
  content: string
  ui?: AccordionItemStyleProps
}
