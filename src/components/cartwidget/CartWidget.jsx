import {BsCartFill} from "react-icons/bs"
import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {
    return (
        <>
        <BsCartFill  fontSize={'2rem'}/>
        <Badge bg="danger">30</Badge>
        </>
    )
}

export default CartWidget