import PropTypes from 'prop-types';

import style from "./spinner.module.scss";

export function Spinner({ className, loading, size, success, label, successIcon, errorIcon }) {
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
                : <div className={style.done}>
                { success
                    ? <span className={`${style.done__icon}  ${className} material-symbols-outlined`}>
                        {successIcon ?? 'check_circle'}
                    </span>
                : <span className={`${style.error__icon}  ${className} material-symbols-outlined`}>
                        {errorIcon ?? 'close'}
                    </span>
                }
                    <span className={style.done__label}>
                        {label}
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
    errorIcon: PropTypes.string,
    label: PropTypes.string,
};
