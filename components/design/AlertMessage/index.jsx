import PropTypes from 'prop-types';

import style from './alert_message.module.scss';

const defaultIcons = {
    error: 'error',
    warning: 'warning',
    info: 'info',
    success: 'check_circle',
};

export function AlertMessage({ icon, message, type }) {
    return (
        <div className={style.container}>
            <span className={`${style.container__icon} ${style[type]} material-symbols-outlined`}>
                {icon ?? defaultIcons[type]}
            </span>
            <span className={style.container__message}>
                {message}
            </span>
        </div>
    );
}

AlertMessage.propTypes = {
    icon: PropTypes.string,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
};
