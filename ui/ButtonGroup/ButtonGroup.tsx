import cn from 'classnames'
import styles from './ButtonGroup.module.scss'

interface ButtonGroupProps {
  children: React.ReactNode
  mode?: 'vertical' | 'horizontal'
  gap?: number
}

export const ButtonGroup = ({ gap, mode = 'horizontal', children }: ButtonGroupProps) => {
  return (
    <div
      className={cn(
        styles.ButtonGroup,
        {
          vertical: styles['ButtonGroup--mode-vertical'],
          horizontal: styles['ButtonGroup--mode-horizontal'],
        }[mode],
        gap && styles['ButtonGroup--gap'],
      )}
    >
      {children}
    </div>
  )
}
