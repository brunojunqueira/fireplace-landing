import style from './input.module.scss';

export function InputText({ label, name, error, variant = 'default', ...rest }) {

    function setVariant(v){
        switch(v){
            case 'minimalist': 
                return style.minimalist;
            case 'default': 
                return style.default;
        }
    }

    return (
        <div className={setVariant(variant)}>
            <span className={style.alert}>
                {error?.message}⠀
            </span>
            <input
                name={name} 
                id={name} 
                placeholder={variant === 'minimalist' ? variant : ''}
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