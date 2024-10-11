import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
  backgroundImageUrl?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
  backgroundImageUrl,
}) => {
  return (
    <div
      className={classNames(
        style.appIconContainer,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className,
      )}
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
        backgroundColor: background,
      }}
    >
      <span className={style.appIconText}>
        Γ㌏γ
      </span>
    </div>
  )
}

export default AppIcon
