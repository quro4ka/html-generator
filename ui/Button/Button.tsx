// import styles from '@/ui/Button/Button.module.scss'
import styles from './Button.module.scss'
import cn from 'classnames'

interface ButtonProps {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link'
  appearance?: 'accent' | 'positive' | 'negative' | 'neutral' | 'overlay' | 'accent-invariable'
  size?: 's' | 'm' | 'l'
  children: string | JSX.Element
  stretched?: boolean
  before?: React.ReactNode
  after?: React.ReactNode
  loading?: boolean
  disableSpinnerAnimation?: boolean
}

export const Button = ({ size = 's', mode = 'primary', children }: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.Button,
        {
          s: styles['Button--size-s'],
          m: styles['Button--size-m'],
          l: styles['Button--size-l'],
        }[size],
        {
          primary: styles['Button--mode-primary'],
          secondary: styles['Button--mode-secondary'],
          tertiary: styles['Button--mode-tertiary'],
          outline: styles['Button--mode-outline'],
          link: styles['Button--mode-link'],
        }[mode],
      )}
    >
      {children}
    </button>
  )
}
