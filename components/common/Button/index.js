import style from './button.module.scss';
import router from 'next/router';

export function Button({ children, text, className, redirectTo, onClick, iconVariant, rightIcon, leftIcon, ...rest }) {
    const styles = `${style.buttonContent} ${className}`
    const iconStyle = `material-symbols-${iconVariant ?? 'outlined'}`
    
    function handleClick() {
        if(onClick) 
            onClick();
        if(redirectTo) 
            router.push(redirectTo);
    }

    return (
        <>
            <button className={styles} onClick={handleClick} {...rest}>

                { leftIcon && <span className={iconStyle}> {leftIcon} </span> }

                { text }

                { children }

                { rightIcon && <span className={iconStyle}> {rightIcon} </span> }

            </button>
        </>
        
    );
}