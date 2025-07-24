function Card({src, alt, name, graduate, description, quote, id}) {
    return (
        <div role="article" aria-labelledby={`card-${id}-title`} className="card p-6 rounded-2xl"
        id={`card-${id}-title`}>
            <div className="head flex gap-4 items-center">
                <img src={src} alt={alt} className="rounded-full w-10 h-10 border-2" loading="lazy"/>
                <div className="text">
                    <span className="name block font-semibold">{name}</span>
                    <span className="graduate block font-medium text-gray-400">{graduate}</span>
                </div>
            </div>
            <div className="description font-semibold">{description}</div>
            <div className="quote font-medium text-gray-400">{quote}</div>
        </div>
    );
}
export default Card;