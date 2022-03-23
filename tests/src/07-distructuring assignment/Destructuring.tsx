import React from 'react';


export type ManType = {
    name: string,
    age: number,
    lessons: Array<{title:number, name?:string}>,
    adress: {
        street: {
            title:string
        }
    }
}

type PropsType = {
    title: string,
    man: ManType,
    car: string
}

const ManComponent:React.FC<PropsType> = ({title, man, ...Rest}) => {

    // const {title, man, ...Rest} = props


    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>{Rest.car}</div>
        </div>
    );
};

export default ManComponent;