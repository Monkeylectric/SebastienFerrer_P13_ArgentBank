import './Features.css';

function Features({children}) {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {children}
        </section>
    )
}

export default Features;