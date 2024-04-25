import { useContext } from 'react';
import { ActiveLinkContext } from '../App.jsx';

export const NavButton = ({ label, onClick }) => {

    const active = useContext(ActiveLinkContext);

    return (
        <>
                <button onClick={onClick} className={active === label ? ("nav-button active-link") : ("nav-button")}>{label}</button>
        </>
    )
}

export default NavButton;