import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) =>{
    const [title,setTitle]  = useState('')
    const [Amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

        
    const inputTitle = (event) =>{
       // console.log('rap')
       setTitle(event.target.value)
        
    }
    const inputAmount = (event) =>{
        setAmount(event.target.value)
    }
    const saveItem = (event) =>{
        event.preventDefault();
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(Amount)
        }
        //console.log(itemData);
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }
    useEffect(()=>{
        if(Amount !== 0 && Amount != ''){
            setFormValid(true)
        }
    },[Amount])
    
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={Amount}/>
                </div>
                <div>
                    <button type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;