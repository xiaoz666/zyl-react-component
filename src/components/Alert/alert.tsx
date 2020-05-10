import React, { FC,useState } from "react"
import classNames from "classnames"

interface IZylAlrtProps {
  className?: string;
  type?: string;
  title: string;
  showClose?: boolean;
  content?: string;
  onClose?:Function;
}
type AlertProps = Partial<IZylAlrtProps&React.DOMAttributes<HTMLElement>>
const Alert: FC<AlertProps> = (props) => {
  // const [showAlert,setShowAlert]= useState(true)
  const { className, type, title, showClose, content,onClose } = props
  const classes = classNames('zyl-alert', className, {
    [`zyl-alert-${type}`]: type
  })
  const remove=function(e:any){
    e.target.parentNode.remove()
    if(onClose){
      onClose(e.target.parentNode)
    }
  }
  return (
    <div className={classes}>
      <span onClick={remove} className={`zyl-alert-closebtn ${!showClose ? 'zyl-hide' : ''}`}>关闭</span>
      <p className='zyl-alert-title'>{title}</p>
      <p className='zyl-alert-content'>{content}</p>
    </div>
  )
}
Alert.defaultProps = {
  type: 'default',
  showClose: true
}
export default Alert