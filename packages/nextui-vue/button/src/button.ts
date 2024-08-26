import type { ButtonVariantProps } from '@nextui-org/theme'

export interface ButtonProps {
  disabled?: boolean
  size?: ButtonVariantProps['size']
  type?: ButtonVariantProps['variant']
}
