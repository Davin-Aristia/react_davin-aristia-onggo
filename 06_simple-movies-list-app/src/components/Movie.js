function Movie({ image, title }) {
    return (
        <div style={{width: "20%"}} className="p-3">
            <div className="card">
                <img src={image} className="card-img-top square-image" alt={title} />
                <div className="card-body background-orange">
                <p className="card-text text-white text-center">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie;