import PropTypes from 'prop-types';

import style from "./spinner.module.scss";

export function Spinner({ className, loading, size, success, successLabel, successIcon, errorLabel, errorIcon }) {
    const styles = `${style.spinner} ${className}`;

    return (
        <>
            { loading
                ? <div
                    className={ styles }
                    style={
                        {
                            height: size + 'rem',
                            width: size + 'rem'
                        }
                    }
                />
                : success
                ? <div className={style.done}>
                    <span className={`${style.done__icon}  ${className} material-symbols-outlined`}>
                        {successIcon ?? 'check_circle'}
                    </span>
                    <span className={style.done__label}>
                        {successLabel}
                    </span>
                </div>
                : <div className={style.error}>
                    <span className={`${style.error__icon}  ${className} material-symbols-outlined`}>
                        {errorIcon ?? 'close'}
                    </span>
                    <span className={style.done__label}>
                        {errorLabel}
                    </span>
                </div>
            }
        </>
    );
}

Spinner.propTypes = {
    className: PropTypes.any,
    loading: PropTypes.bool,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    success: PropTypes.bool,
    successIcon: PropTypes.string,
    successLabel: PropTypes.string,
    errorLabel: PropTypes.string,
    errorIcon: PropTypes.string,
};
