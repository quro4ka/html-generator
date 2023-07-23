import { HeaderTemplate } from '@/components/Header/HeaderTemplate/HeaderTemplate'
import { SideBar } from '@/components/SideBar/SideBar'
import styles from './TemplateLayout.module.scss'

export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderTemplate />
      <div className={styles.main}>
        <SideBar />
        <div className={styles.layout}>{children}</div>
      </div>
    </div>
  )
}
