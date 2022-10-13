import PropTypes from 'prop-types';

import style from './checkbox.module.scss';

export function Checkbox({ onToggleCheck, name, label }) {
    const handleCheck = (e) => {
        onToggleCheck(e.target.checked);
    };

    return (
        <div className={style.content}>
            <input
                name={name}
                id={name}
                type='checkbox'
                defaultChecked={false}
                onChange={handleCheck}
                className={style.content__checkbox}
            />
            <label
                htmlFor={name}
                className={style.content__label}
            >
                {label ?? ''}
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    onToggleCheck: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
};
