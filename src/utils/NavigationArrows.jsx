import './NavigationArrows.scss';

const NavigationArrows = ({whichProject, changeProject}) => {


    return (
        <div className="NavigationArrows">
            {/*<svg onClick={() => changeProject()} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">*/}
            {/*    <circle cx="25" cy="25" r="24" fill="white" stroke="#45CB85" stroke-width="2"/>*/}
            {/*    <path d="M11.9393 23.4393C11.3536 24.0251 11.3536 24.9749 11.9393 25.5607L21.4853 35.1066C22.0711 35.6924 23.0208 35.6924 23.6066 35.1066C24.1924 34.5208 24.1924 33.5711 23.6066 32.9853L15.1213 24.5L23.6066 16.0147C24.1924 15.4289 24.1924 14.4792 23.6066 13.8934C23.0208 13.3076 22.0711 13.3076 21.4853 13.8934L11.9393 23.4393ZM38 23L13 23L13 26L38 26L38 23Z" fill="#45CB85"/>*/}
            {/*</svg>*/}
            <button className="left" onClick={() => changeProject()}></button>
            <div className={(whichProject === 0) ? "activeDot" : null}></div>
            <div className={(whichProject === 1) ? "activeDot" : null}></div>
            <button className="right" onClick={() => changeProject()}></button>
            {/*<svg onClick={() => changeProject()} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">*/}
            {/*    <path d="M1 25C1 11.7452 11.7452 0.999994 25 0.999994C38.2548 0.999994 49 11.7452 49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25Z" fill="white" stroke="#45CB85" stroke-width="2"/>*/}
            {/*    <path d="M38.0607 26.5607C38.6464 25.9749 38.6464 25.0251 38.0607 24.4393L28.5147 14.8934C27.9289 14.3076 26.9792 14.3076 26.3934 14.8934C25.8076 15.4792 25.8076 16.4289 26.3934 17.0147L34.8787 25.5L26.3934 33.9853C25.8076 34.5711 25.8076 35.5208 26.3934 36.1066C26.9792 36.6924 27.9289 36.6924 28.5147 36.1066L38.0607 26.5607ZM12 27L37 27L37 24L12 24L12 27Z" fill="#45CB85"/>*/}
            {/*</svg>*/}
        </div>
    );
};

export default NavigationArrows;