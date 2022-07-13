import style from './input.module.scss';

<<<<<<< HEAD
export function InputText({ label, name, error, variant = 'default', ...rest }) {
=======
export function InputText({ label, name, error, placeholder, variant = 'default', ...rest }) {
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450

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
<<<<<<< HEAD
                {error?.message}⠀
=======
                {error?.message}
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
            </span>
            <input
                name={name} 
                id={name} 
<<<<<<< HEAD
                placeholder={variant === 'minimalist' ? variant : ''}
=======
                placeholder={ variant === 'minimalist' ? " " : placeholder }
>>>>>>> 64b007556a2c8c7c9c5403d5df14ddd2d566d450
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