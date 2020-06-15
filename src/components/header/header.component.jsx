import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon  from '../../components/cart-icon/cart-icon.components';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.components';
import {useSelector} from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';


function Header(){

    const hidden = useSelector(selectCartHidden);
    const currentUser = useSelector(selectCurrentUser);

    

    return(
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    Contact
                </Link>
                { (currentUser !== null ) ? (
                    <Link as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </Link>
                    ) : (
                    <Link to='/signup'>
                    <span>SIGN IN </span>
                    </Link>
                )}
                <CartIcon />
            </div>
            {
                hidden ? false : <CartDropDown />
            }
        </div>
    )
}



// const mapStateToProps = state =>({
//     currentUser:state.user.currentUser
// })
// export default connect(mapStateToProps)(Header);
export default Header;