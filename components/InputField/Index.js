import style from './style.module.css';
import { withFormsy } from 'formsy-react';
import { useState } from 'react';

function InputField({w, h, valid, regexp, hasLabel, func, alert, name, id, pattern, ...rest}){
    
    const [thisvalid, isValid] = useState(false);
    var state = useState({value: ''});
    const regex = new RegExp(pattern);

    function handleChange(event){
        const state = {value: event.target.value};
        
        if(regexp && valid) regex.test(state.value) ? isValid(true) : isValid(false);
        else if(regexp && !valid) regex.test(state.value) && valid ? isValid(true) : isValid(false);
        else if(!regexp) isValid(valid);

        console.log(valid);
    }


    return(
        <>
            <div style={style.container}>
                { hasLabel && (
                    <label htmlFor={id} className={style.label}>{name}</label>
                )}
                <input id={id} name={id} className={ (alert) ? (thisvalid ? style.success : style.error) : style.input } value={state.value} onChange={ (event) => {alert && handleChange(event); func && func(event)}} style={{ width: w, height: h}} {...rest}/>
                { (alert && !thisvalid) && (
                    <div htmlFor={id} className={style.alert}>{alert}</div>
                )}
            </div> 
        </>
    )
}

InputField.defaultProps = {
    valid: true,
    regexp: true,
    w: "100%",    
    h: 25,    
    hasLabel: false,
}

export default withFormsy(InputField);