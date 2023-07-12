import { useState } from "react";
import './search.scss';
import Button from "../Button/Button";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <form className='form' action="" onSubmit={handleSubmit}>
      <input onChange={handleChange} className="input" type="text" placeholder="Search hero..." name="" id="" required/>
      <Button text="Search" type="submit"/>
    </form>
  )
}

export default Form;