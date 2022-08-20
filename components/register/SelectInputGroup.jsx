import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';

import { InputSelect } from "components/common/InputSelect";

import style from '_assets/scss/register.module.scss';

export function SelectInputGroup({ control, formErrors }) {
    const { t } = useTranslation('register');

    const [daysInput, setDaysInput] = useState([]);
    const [monthsInput, setMonthsInput] = useState([]);
    const [yearsInput, setYearsInput] = useState([]);

    useEffect(() => {
        returnDaysOfMonth();
        returnMonths();
        returnYears();
    }, []);

    const customSelectStyle = {
        option: (provided, state) => ({
            ...provided,
            color: 'white',
            background: state.isSelected ? '#3e474f' : state.isFocused && '#3f3f3f'
        }),
        menu: (provided) => ({
            ...provided,
            top: '30px',
            background: '#2f2f2f'
        }),
        menuList: (provided) => ({
            overflow: 'scroll',
            height: '150px'
        }),
        control: (provided, state) => ({
            ...provided,
            width: '100%',
            border: 0,
            borderRadius: 0,
            boxShadow: 'none',
            borderBottom: '1px solid white',
            outline: 0,
            color: 'white',
            background: 'transparent'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white'
        }),
        indicatorSeparator: () => {},
        container: (provided) => ({
            ...provided,
            width: '100%'
        })
    };

    function returnDaysOfMonth() {
        const days = [];

        for (let i = 1; i < 32; i++) {
            days.push({ label: i, value: i });
        }

        setDaysInput(days);
    }

    function returnMonths() {
        const months = [];

        for (let i = 1; i < 13; i++) {
            months.push({ label: i, value: i });
        }

        setMonthsInput(months);
    }

    function returnYears() {
        const years = [];

        const currentYear = new Date().getUTCFullYear();
        const minimalYearChoice = currentYear - 120;

        for (let i = minimalYearChoice; i < currentYear + 1; i++) {
            years.push({ label: i, value: i });
        }

        setYearsInput(years);
    }

    return (
        <div className={style.form__birthday_field}>
            <Controller
                control={control}
                name="birthDay"
                render={ ({ field: { onChange } }) => (
                    <InputSelect
                        onChange={value => onChange(value.label)}
                        styles={customSelectStyle}
                        options={daysInput}
                        placeholder={t('step1.inputDayPlaceholder')}
                        name="birthDay"
                        id="birthDay"
                        error={formErrors?.birthDay}
                    />
                )}
            />

            <Controller
                control={control}
                name="birthMonth"
                render={ ({ field: { onChange } }) => (
                    <InputSelect
                        onChange={value => onChange(value.label)}
                        styles={customSelectStyle}
                        options={monthsInput}
                        placeholder={t('step1.inputMonthPlaceholder')}
                        name="birthMonth"
                        id="birthMonth"
                        error={formErrors?.birthMonth}
                    />
                )}
            />

            <Controller
                control={control}
                name="birthYear"
                render={ ({ field: { onChange } }) => (
                    <InputSelect
                        onChange={value => onChange(value.label)}
                        styles={customSelectStyle}
                        options={yearsInput}
                        placeholder={t('step1.inputYearPlaceholder')}
                        name="birthYear"
                        id="birthYear"
                        className={style.yearInputStyle}
                        error={formErrors?.birthYear}
                    />
                )}
            />
        </div>
    );
}

SelectInputGroup.propTypes = {
    control: PropTypes.any.isRequired,
    formErrors: PropTypes.object.isRequired,
};
