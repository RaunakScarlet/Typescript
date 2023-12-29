import './InputField.css'

const InputField = () => {
  return (
    <form className="inputField">
          <input className="input" type="input" placeholder="Enter a task" />
          <button className="inputButton" type="submit" >Go</button>
    </form>
  )
}

export default InputField
