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
  onClick?: () => void
}

export const Button = ({
  size = 's',
  mode = 'primary',
  appearance = 'accent',
  stretched = false,
  after,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
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
        {
          accent: styles['Button--appearance-accent'],
          positive: styles['Button--appearance-positive'],
          negative: styles['Button--appearance-negative'],
          neutral: styles['Button--appearance-neutral'],
          overlay: styles['Button--appearance-overlay'],
          'accent-invariable': styles['Button--appearance-accent-invariable'],
        }[appearance],
        stretched && styles['Button--stretched'],
      )}
    >
      <span className={styles.Button__in}>
        {children && <span className={styles.Button__content}>{children}</span>}
        {after && (
          <span className={styles.Button__after} role="presentation">
            {after}
          </span>
        )}
      </span>
    </button>
  )
}
