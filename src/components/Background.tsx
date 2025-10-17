import backgroundDesktop from '../assets/images/background-pattern-desktop.svg'
import backgroundMobile from '../assets/images/background-pattern-mobile.svg'

const Background = () => {
    return (
        <img style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -1,
        }} src={window.innerWidth > 600 ? backgroundDesktop : backgroundMobile} alt="background"/>
    );
};
export default Background