import PropTypes from 'prop-types';

import style from './input.module.scss';

export function InputText({ label, name, error, variant, ...rest }) {
    function setVariant(variantType) {
        switch (variantType) {
            case 'minimalist':
                return style.minimalist;
            case 'default':
                return style.default;
        }
    }

    return (
        <div className={setVariant(variant)}>
            <span className={style.alert}>
                {error?.message}
            </span>
            <input
                name={name}
                id={name}
                placeholder={ variant === 'minimalist' && " " }
                {...rest}
            />
            <label
                htmlFor={name}
            >
                {label}
            </label>
        </div>
    );
}

InputText.defaultProps = {
    variant: 'default',
};

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    variant: PropTypes.string
};
