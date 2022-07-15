import style from "./spinner.module.scss"

const Spinner = (size, className, props) => {
    const styles = `${style.spinner} ${className}`
    return(
        <div 
            className={styles} 
            style={
                {
                    height: size + 'rem', 
                    width: size + 'rem'
                }
            }
        />
    )
}

export default Spinner