import PropTypes from 'prop-types';
import './Items.css';



const Items = (Props)=>{
    const {title,amount} = Props;
    const status = amount < 0 ? "expense" : " income"
    const symbol = amount < 0 ? "-" : "+"
    
    return (
        <li className={status}><p>ชื่อ{title} ราคา {symbol}{Math.abs(amount)}</p></li>
    );
}
Items.propTypes = {
    title:PropTypes.string,
    amount:PropTypes.number
}


export default Items;