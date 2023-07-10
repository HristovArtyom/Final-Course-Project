import './button.scss';

const Button = ({ text, styleChange, className, type }) => {
  return <button className={`${className} button`} type={type} onClick={styleChange}>{text}</button>
}

export default Button;