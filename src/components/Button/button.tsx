import React, { FC } from "react"
import classNames from "classnames"

enum ButtonSize {
  large = 'lg',
  medium = "md",
  small = 'sm'
}
enum ButtonType {
  primary = 'primary',
  default = 'default',
  link = 'link',
  info = 'info',
  danger = 'danger'
}

interface ZylButtonProps {
  className?: string;
  disabled?: boolean;
  size?: string;
  btnType?: string;
  href?: string;
  children: React.ReactNode;
}
type HtmlButtonProps = ZylButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type HtmlAProps = ZylButtonProps & React.AnchorHTMLAttributes<HTMLElement>
type ButtonProps = Partial<HtmlButtonProps & HtmlAProps>
const Button: FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, href, children, ...restProps } = props;
  const classnames = classNames('zyl-btn', className, {
    [`zyl-btn-${btnType}`]: btnType,
    [`zyl-btn-${size}`]: size,
    [`zyl-btn-disabled`]: ButtonType.link === btnType && disabled,
  })
  if (ButtonType.link === btnType) {
    return (
      <a className={classnames} href={href} {...restProps}>{children}</a>
    )
  }
  return (
    <button className={classnames} disabled={disabled} {...restProps}>{children}</button>
  )
}
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.default,
  size: ButtonSize.medium
}
export default Button