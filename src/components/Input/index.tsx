import s from "./Input.module.css"

const Input = () => {
    return (
        <div className={s.wrapper}>
            <input 
              className={s.input}
              placeholder='Type messsage'
              />
        </div>
    )
}

export default Input