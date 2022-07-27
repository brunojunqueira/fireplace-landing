import PropTypes from 'prop-types';

import style from "./spinner.module.scss";

export function Spinner({ className, loading, size, success, successLabel, errorLabel }) {
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
                        check_circle
                    </span>
                    <span className={style.done__label}>
                        {successLabel}
                    </span>
                </div>
                : <div className={style.error}>
                    <span className={`${style.error__icon}  ${className} material-symbols-outlined`}>
                        close
                    </span>
                    <span>
                        {errorLabel}
                    </span>
                </div>
            }
        </>
    );
}

Spinner.propTypes = {
    className: PropTypes.any,
    loading: PropTypes.bool.isRequired,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    success: PropTypes.bool.isRequired,
    successLabel: PropTypes.string.isRequired,
    errorLabel: PropTypes.string.isRequired,
};
