import style from "./spinner.module.scss"

function Spinner(props){

    const styles = `${style.spinner} ${props?.className}`;
    
    return(
        <>
            { props?.loading ? 
                <div 
                    className={ styles } 
                    style={
                        {
                            height: props?.size + 'rem', 
                            width: props?.size + 'rem'
                        }
                    }
                />
                :
                props?.success ? 
                <div className={style.done}>
                    <span className={`${style.done__icon}  ${props?.className} material-symbols-outlined`}>
                        check_circle
                    </span> 
                    <span className={style.done__label}>
                        {props?.successLabel}
                    </span>
                </div>
                :
                <div className={style.error}>
                    <span className={`${style.error__icon}  ${props?.className} material-symbols-outlined`}>
                        close
                    </span> 
                    <span>
                        {props?.errorLabel}
                    </span>
                </div>
            }
        </>    
    )
}

export { Spinner }