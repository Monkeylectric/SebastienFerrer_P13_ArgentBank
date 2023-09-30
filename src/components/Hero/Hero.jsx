import './Hero.css';

function Hero(props) {
    return (
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                {props.subtitles.map((subtitle, index) => (
                    <p key={index} className="subtitle">{subtitle}</p>
                ))}
                <p className="text">{props.text}</p>
            </section>
        </div>
    )
}

export default Hero;