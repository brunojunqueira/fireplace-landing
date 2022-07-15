import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import { Controller, useForm } from "react-hook-form";

import Select from "react-select";
import { Button } from "../../components/common/Button";
import { InputText } from "../../components/common/InputText";

import style from 'pages/register/register.module.scss';

function Step1RegisterForm({ formInputData, setFormInputData, setIsStep1Completed }) {
    const { t } = useTranslation('register');
    const { handleSubmit, control, setError, formState: { errors } } = useForm();

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

    function handleSubmitStep1RegisterForm(model) {
        console.log('model step 1', model);

        setFormInputData({
            ...formInputData,
            ...model
        });

        setIsStep1Completed(true);
    }

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
        let minimalYearChoice = currentYear - 120;

        for (let i = minimalYearChoice; i < currentYear + 1; i++) {
            years.push({ label: i, value: i });
        }

        setYearsInput(years);
    }

    return (
        <main className={style.content}>
            <form 
                onSubmit={handleSubmit(handleSubmitStep1RegisterForm)} 
                className={style.form}
            >
                <div className={style.form__name_field}>
                    
                    <Controller 
                        control={control}
                        name='name'
                        render={ ({ field: { onChange } }) => (
                            <InputText 
                                onChange={onChange}
                                label={t('step1.namePlaceholder')}
                                variant="minimalist"
                                type="text"
                                name="name"
                                id="name"
                                required
                            />
                        )}
                        rules={{
                            required: t('inputRequired') 
                        }}
                    />

                    <Controller 
                        control={control}
                        name='forname'
                        render={ ({ field: { onChange } }) => (
                            <InputText 
                                onChange={onChange}
                                label={t('step1.fornamePlaceholder')}
                                variant="minimalist"
                                type="text"
                                name="forname"
                                id="forname"
                                required
                            />
                        )}
                        rules={{
                            required: t('inputRequired') 
                        }}
                    />   
                </div>
                
                <Controller 
                        control={control}
                        name='email'
                        render={ ({ field: { onChange } }) => (
                            <InputText 
                                onChange={onChange}
                                label={t('step1.emailPlaceholder')}
                                variant="minimalist"
                                type="text"
                                name="email"
                                id="email"
                                required
                            />
                        )}
                        rules={{
                            required: t('inputRequired') 
                        }}
                />
                
                <div className={style.form__birthday_field}>
                    <Controller 
                            control={control}
                            name="birthdayDay"
                            render={ ({ field: { onChange } }) => (
                                <Select 
                                    onChange={onChange}
                                    styles={customSelectStyle}
                                    options={daysInput}
                                    placeholder={t('step1.inputDayPlaceholder')}
                                    name="birthdayDay"
                                    id="birthdayDay"
                                />
                            )}
                            rules={{
                                required: t('inputRequired') 
                            }}
                    />

                    <Controller 
                            control={control}
                            name="birthdayMonth"
                            render={ ({ field: { onChange } }) => (
                                <Select 
                                    onChange={onChange}
                                    styles={customSelectStyle}
                                    options={monthsInput}
                                    placeholder={t('step1.inputMonthPlaceholder')}
                                    name="birthdayMonth"
                                    id="birthdayMonth"
                                />
                            )}
                            rules={{
                                required: t('inputRequired') 
                            }}
                    />

                    <Controller 
                            control={control}
                            name="birthdayYear"
                            render={ ({ field: { onChange } }) => (
                                <Select 
                                    onChange={onChange}
                                    styles={customSelectStyle}
                                    options={yearsInput}
                                    placeholder={t('step1.inputYearPlaceholder')}
                                    name="birthdayYear"
                                    id="birthdayYear"
                                    className={style.yearInputStyle}
                                />
                            )}
                            rules={{
                                required: t('inputRequired') 
                            }}
                    />
                </div>

                <Button 
                    type="submit" 
                    text={t('step1.nextButtonText')}
                    className={style.form__button}
                />
            </form>
        </main>
    );
}

export default Step1RegisterForm;