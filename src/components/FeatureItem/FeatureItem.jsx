import './FeatureItem.css';

function FeatureItem(props) {
    const src = props.src;
    const alt = props.alt;
    const title = props.title;
    const text = props.text;

    return (
        <div className="feature-item">
            <img src={src} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default FeatureItem;