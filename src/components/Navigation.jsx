import NavButton from "./NavButton"
import { useSpring, animated } from '@react-spring/web'

export const Navigation = ({ changePage }) => {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    })

    return (
        <>
            <div className='navigation'>
                <NavButton onClick={() => changePage('home')} label="home" />
                <NavButton onClick={() => changePage('projects')} label="projects" />
                <NavButton onClick={() => changePage('photography')} label="photography" />
                <NavButton onClick={() => changePage('cinematography')} label="cinematography" />
                <NavButton onClick={() => changePage('artwork')} label="artwork" />
            </div>
        </>
    )
}

export default Navigation;