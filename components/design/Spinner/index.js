import style from "./spinner.module.scss"

const Spinner = (size, props) => (
    <div 
        className={style.spinner} 
        style={
            {
                height: size + 'rem', 
                width: size + 'rem'
            }
        }
        {...props}
    />
)

export default Spinner