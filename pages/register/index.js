import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Select from "react-select";
import { Button } from "../../components/common/Button";
import { InputText } from "../../components/common/InputText";
import Logo from "../../components/design/Logo";
import Main from '../../templates/Main';

import style from './register.module.scss';
import { useEffect } from "react";



function Register() {
    const { t } = useTranslation('register');
    const [daysInput, setDaysInput] = useState([]);
    const [monthsInput, setMonthsInput] = useState([]);
    const [yearsInput, setYearsInput] = useState([]);

    useEffect(() => {
        returnDaysOfMonth();
        returnMonths();
        returnYears();
    }, [])

    const customSelectStyle = {
        option: (provided, state) => ({
            ...provided,
            color: 'white',
            background: state.isSelected ? '#3e474f' : state.isFocused && '#3f3f3f'
        }),
        menu: (provided) => ({
            ...provided,
            top: '30px',
            background: '#2f2f2f',
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
            width: '100%',
        })
    }

    function handleSubmitRegister(event) {
        event.preventDefault();
        return;
    }

    function returnDaysOfMonth() {
        const days = [];

        for (let i = 1; i < 31; i++) {
            days.push({ label: i, value: i });
        }

        setDaysInput(days);
    }

    function returnMonths() {
        const months = [];

        for (let i = 1; i < 12; i++) {
            months.push({ label: i, value: i });
        }

        setMonthsInput(months);
    }

    function returnYears() {
        const years = [];

        const currentYear = new Date().getUTCFullYear();
        let minimalYearChoice = currentYear - 120;

        for (let i = minimalYearChoice; i < currentYear; i++) {
            years.push({ label: i, value: i });
        }

        setYearsInput(years);
    }

    return (
        <Main title={t('register')}>
            <main className={style.content}>
                <Logo />
                <form onSubmit={handleSubmitRegister} className={style.form}>

                    <div className={style.form__name_field}>
                        <InputText 
                            label={t('name')}
                            variant="minimalist"
                            type="text"
                            name="name"
                            id="name"
                            required
                        />
                        <InputText 
                            label={t('forname')}
                            variant="minimalist"
                            type="text"
                            name="forname"
                            id="forname"
                            required
                        />
                    </div>
                    
                    <InputText 
                        label={t('email')}
                        variant="minimalist"
                        type="text"
                        name="email"
                        id="email"
                        required
                    />

                    <InputText 
                        label={t('userName')}
                        variant="minimalist"
                        type="text"
                        name="pseudonym"
                        id="pseudonym"
                        required
                    />

                    <InputText 
                        label={t('password')}
                        variant="minimalist"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />

                    <InputText 
                        label={t('confirmPassword')}
                        variant="minimalist"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                    />
                    
                    <div className={style.form__birthday_field}>
                        <Select 
                            styles={customSelectStyle}
                            options={daysInput}
                            placeholder="Dia"
                        />

                        <Select 
                            styles={customSelectStyle}
                            options={monthsInput}
                            placeholder="Mês"
                        />

                        <Select 
                            styles={customSelectStyle}
                            className={style.yearInputStyle}
                            options={yearsInput}
                            placeholder="Ano"
                        />
                    </div>

                    <Button 
                        type="submit" 
                        text={t('register')}
                        className={style.form__button}
                    />
                </form>
            </main>
        </Main>
    );
}

export default Register;