import { motion, AnimatePresence } from 'framer-motion';

export const RollingHeader = () => {
    return (
        <>
            <div className="rollingHeader">
                <motion.div
                    animate={{ x: '-100%' }}
                    transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                >
                    <h1 className="rollingHeader-text">
                        SOME PROJECTS
                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="58" fill="none" viewBox="0 0 50 58">
                                <path fill="#F2C360" d="M24.013 1.034c.183-1.119 1.791-1.119 1.974 0l2.225 13.6a1 1 0 0 0 1.719.52l8.86-9.528c.76-.818 2.087.039 1.654 1.07l-5.485 13.03a1 1 0 0 0 1.07 1.377l12.667-1.89c1.076-.16 1.598 1.271.672 1.841l-11.526 7.093a1 1 0 0 0 0 1.704l11.526 7.093c.926.57.404 2.001-.672 1.84l-12.667-1.89a1 1 0 0 0-1.07 1.378l5.485 13.032c.433 1.03-.893 1.887-1.654 1.069l-8.86-9.528a1 1 0 0 0-1.72.52l-2.224 13.6c-.183 1.119-1.791 1.119-1.974 0l-2.225-13.6a1 1 0 0 0-1.719-.52l-8.86 9.528c-.76.818-2.087-.039-1.654-1.07l5.485-13.031a1 1 0 0 0-1.07-1.377l-12.667 1.89c-1.076.16-1.599-1.271-.672-1.841l11.526-7.093a1 1 0 0 0 0-1.704L.631 21.055c-.927-.57-.404-2.001.672-1.84l12.667 1.89a1 1 0 0 0 1.07-1.378L9.555 6.695c-.433-1.03.893-1.887 1.655-1.069l8.86 9.528a1 1 0 0 0 1.718-.52l2.225-13.6Z" />
                            </svg> </span>
                        SOME PROJECTS
                    </h1>
                </motion.div>
            </div>
        </>
    )
}

export default RollingHeader;