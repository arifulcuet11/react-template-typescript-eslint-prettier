import React from 'react';
type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextFieldProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
    name?: string;
    type?: 'email' | 'password' | 'text';
    textarea?: boolean;
    required?: boolean;
}

const TextField = React.forwardRef<InputElement, TextFieldProps>(
    (
        { onChange, textarea = false, required = false, ...rest },
        ref
    ): JSX.Element => {
        const InputElement = textarea ? 'textarea' : 'input';
        return (
            <InputElement
                className={`rounded-md w-full border border-gray-400 p-3 mb-2 ${
                    textarea ? 'h-32' : ''
                }`}
                onChange={({ target: { value } }: InputChangeEvent) =>
                    onChange(value)
                }
                required={required}
                {...rest}
            />
        );
    }
);
TextField.displayName = 'TextField';
export default TextField;
