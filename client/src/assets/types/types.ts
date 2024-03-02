export interface PostProps {
    _id:string;
    name:string;
    prompt:string;
    photo:string;
}

export interface CardProps {
    data:PostProps[];
    title:string;
}

export interface FormProps {
    name:string;
    prompt:string;
    photo:string;
}

export type FormFieldProps = {
    labelName:string;
    type:string;
    name:string;
    placeholder:string;
    value:string;
    isSurpriseMe?:boolean;
    handleChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
    handleSurpriseMe?: () => void;
}