import Select from "react-select";

import PropTypes from 'prop-types';

import style from './inputSelect.module.scss';

export function InputSelect({ error, ...rest }) {
    return (
        <div>
            <Select
                {...rest}
            />

            <span className={style.alert}>
                {error?.message}
            </span>
        </div>
    );
}

InputSelect.propTypes = {
    error: PropTypes.object.isRequired
};
