import cn from 'classnames'
import styles from './ButtonGroup.module.scss'

interface ButtonGroupProps {
  children: React.ReactNode
  mode?: 'vertical' | 'horizontal'
  style?: object
  gap?: number
}

export const ButtonGroup = ({
  gap,
  mode = 'horizontal',
  children,
  ...restProps
}: ButtonGroupProps) => {
  return (
    <div
      {...restProps}
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
