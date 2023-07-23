'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './HeaderTemplate.module.scss'
import cn from 'classnames'
import { Navigation } from '../../Navigation/Navigation'
import { Button } from '@/ui/Button/Button'
import { ButtonGroup } from '@/ui/ButtonGroup/ButtonGroup'

interface HeaderProps {}

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
]

export const HeaderTemplate = () => {
  const router = useRouter()

  const handleRoute = (href: string) => {
    router.push(href)
  }

  return (
    <header className={cn(styles.Header)}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="75"
            viewBox="0 0 25 54"
            fill="none"
          >
            <path
              d="M4.86483 26.8162C3.89181 27.2201 3.08097 27.1393 2.43229 26.897C2.27013 27.1393 2.18904 27.3816 2.02687 27.6239C1.62145 28.5124 1.21603 29.4009 0.972775 30.2894C0.810606 31.1779 0.648438 32.1472 0.648438 33.1165C0.648438 34.0858 0.810606 34.9743 1.21603 35.7012C1.62145 36.4282 2.35121 36.9128 3.24314 36.9936C4.05398 37.0744 4.86483 36.6705 5.67567 36.1859C7.21627 35.1358 8.59471 33.6011 9.89206 32.1472C11.1894 30.6933 12.4868 29.1586 13.7841 27.6239C15.0815 26.0893 16.4599 24.6354 18.0816 23.343C18.8924 22.6968 19.7844 22.1314 21.0006 21.8891C21.1628 21.8891 21.325 21.8891 21.406 21.8891C21.5682 21.8891 21.6493 21.8891 21.8115 21.8891C22.0547 21.8891 22.3791 21.9698 22.6223 22.0506C23.1899 22.2122 23.6764 22.5353 24.0818 23.0199C24.4062 23.4238 24.6494 23.8276 24.8116 24.3123C25.0548 20.5159 25.9468 9.53083 19.7844 12.4387C15.8112 14.2964 12.9733 19.062 10.1353 22.2929C8.67579 23.9084 6.97302 26.0085 4.86483 26.8162Z"
              fill="#24B744"
            ></path>
            <path
              d="M13.2168 49.8368C13.7843 47.8983 14.5141 46.0405 15.406 44.2635C15.8925 43.375 16.298 42.4865 16.8656 41.598C17.3521 40.7095 17.8386 39.9018 18.4872 39.0941C19.6224 37.4786 20.7576 35.8631 21.8117 34.1669C22.8658 32.5515 23.9199 30.8552 24.1631 28.9974C24.3253 28.0282 24.3253 27.0589 24.2442 26.1704C24.1631 25.2819 23.9199 24.3126 23.3523 23.7472C23.1901 23.5857 23.028 23.4241 22.7847 23.2626C21.0009 26.3319 18.6494 29.159 16.8656 32.2284C14.2709 36.5093 12.6492 40.7903 12.5681 45.7982V53.0678C12.487 53.4716 12.7302 51.6946 13.2168 49.8368ZM0 29.8859C0.243253 28.9167 0.648675 28.0282 1.0541 27.1397C1.5406 26.2512 2.02711 25.3627 2.51362 24.5549C3.56771 22.8587 4.62181 21.1625 5.83808 19.6278C8.27061 16.4777 10.7842 13.4083 13.46 10.5005V0C10.1355 4.11941 6.81109 8.40038 3.89205 12.9237C2.27036 15.4276 0.567591 18.0931 0.243253 21.0817C0.0810844 22.9395 0 24.9588 0 26.7358C0 28.0282 0 29.0782 0 29.8859Z"
              fill="#24B744"
            ></path>
          </svg>
        </Link>
        <div className={styles.btns__group}>
          <ButtonGroup gap={30} mode="horizontal" style={{ marginRight: 70 }}>
            <Button mode="outline" appearance="neutral" onClick={() => handleRoute('/')} size="s">
              back
            </Button>
            <Button
              mode="outline"
              appearance="neutral"
              onClick={() => console.log('/template')}
              size="s"
            >
              Выбрать шаблон
            </Button>
          </ButtonGroup>
          <ButtonGroup gap={1} mode="horizontal">
            <Button appearance="neutral" onClick={() => console.log('/template')} size="s">
              back
            </Button>
            <Button appearance="neutral" onClick={() => console.log('/template')} size="s">
              stop
            </Button>
            <Button appearance="neutral" onClick={() => console.log('/template')} size="s">
              go
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className={styles.right}>
        <ButtonGroup gap={30} mode="horizontal">
          <Button onClick={() => console.log('/template')} size="s">
            Войти
          </Button>
          <Button onClick={() => console.log('222')} size="s" mode="outline">
            Зарегистрироваться
          </Button>
          <Button onClick={() => handleRoute('/template')} size="s" mode="outline">
            Демо
          </Button>
        </ButtonGroup>
      </div>
    </header>
  )
}
