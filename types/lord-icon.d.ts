import type { DetailedHTMLProps, HTMLAttributes } from 'react'

// JSX typing for the <lord-icon> custom element registered by @lordicon/element.
// See https://lordicon.com/docs/web for the full attribute reference.
// React 19's types nest IntrinsicElements under React.JSX (not the old bare
// global JSX namespace), so the augmentation has to go there.
declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'lord-icon': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
          src?: string
          icon?: unknown
          trigger?: string
          state?: string
          target?: string
          colors?: string
          stroke?: 'light' | 'regular' | 'bold'
          speed?: string | number
          'current-color'?: boolean | string
          intro?: string
          loading?: 'lazy' | 'interaction' | string
          motion?: 'always' | 'auto'
        }
      }
    }
  }
}

export {}
