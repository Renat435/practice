import './LanguageStyles.css';

const Language = ({text}) => {
    return(
        <button className="button" type="button">
            {text}
        </button>
    );
}

export default Language;