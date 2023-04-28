import './CenterContent.css';

function CenterContent(props) {
    return (
        <div className={`center-content ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    )
}

export default CenterContent;