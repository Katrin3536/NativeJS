import React, {ChangeEvent, MouseEvent} from 'react';

const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>)=>{

        alert(event.currentTarget.name);

        // alert('User has been deleted')
    }

    const onChangeTextarea = () => {
        console.log('name changed');
    }

    const focusLost = () => {
        console.log('focus lost');
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {

        console.log(event.currentTarget.value);
    }

    return (
        <div>
            <textarea onChange={onChangeTextarea} onBlur={focusLost}>Dimych</textarea>
            <input onChange={onChangeInput} type={'number'}/>
            <button name = "delete" onClick={deleteUser}>+</button>
            <button name = 'save 'onClick={deleteUser}>+</button>
        </div>
    );
};

export default User;
