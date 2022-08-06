import router from 'next/router';

import PropTypes from 'prop-types';

import style from './button.module.scss';

export function Button({
    children,
    text,
    className,
    redirectTo,
    onClick,
    iconVariant,
    rightIcon,
    leftIcon,
    ...rest
}) {
    const styles = `${style.buttonContent} ${className}`;
    const iconStyle = `material-symbols-${iconVariant ?? 'outlined'}`;

    function handleClick() {
        if (onClick) { onClick(); }
        if (redirectTo) { router.push(redirectTo,); }
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

Button.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    className: PropTypes.string,
    redirectTo: PropTypes.string,
    onClick: PropTypes.func,
    iconVariant: PropTypes.string,
    rightIcon: PropTypes.string,
    leftIcon: PropTypes.string,
};
