import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

import Main from "../../../layouts/Main";
import style from "./recover.module.scss";

import Logo from "../../../components/design/Logo";
import { Button } from "../../../components/common/Button";
import { InputText } from "../../../components/common/InputText";
import Spinner from "../../../components/design/Spinner";

function Recover(){

    const [part, setPart] = useState(1);

    const { t } = useTranslation('recover');

    const { handleSubmit, control, setError, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        setPart(2);

        if(data.email == 'brunosdsj@gmail.com'){
            setTimeout(()=>{
                setPart(3);
            }, 5000)
        }

    }

    return(
        <Main
            title={t('recover')}
        >
            <div className={ style.content }>

                <Logo />

                {part == 1 && 
                    <form 
                        className={style.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <Controller 
                            control={control}
                            name='email'
                            render={ ({ field : { onChange }} ) => (
                                <InputText
                                    type='email'
                                    variant='minimalist'
                                    label='Email'
                                    onChange={onChange}
                                    error={errors?.email}
                                />
                            )}
                            rules={{required: t('emailerror')}}
                        />

                        <span
                            className={style.form__label}
                        >
                            {t('label')}
                        </span>

                        <Button
                            type='submit'
                            className={style.form__send}
                        >
                            <span>
                                {t('send')}
                            </span>
                        </Button>

                    </form>
                }
                {
                    part == 2 &&
                    <Spinner 
                        size="2"
                    />
                }
            </div>

        </Main>
    )
}

export default Recover