import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ActiveLinkContext } from '../App.jsx';

export const NavButton = ({ label, onClick }) => {

    const active = useContext(ActiveLinkContext);

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
            >
                <button onClick={onClick} className={active === label ? ("nav-button active-link") : ("nav-button")}>{label}</button>
            </motion.div>
        </>
    )
}

export default NavButton;