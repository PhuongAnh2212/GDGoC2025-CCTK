"use client"
import "./Card1.css"

function Card1({ imagesrc, alttext, title, name, data, baseLink, datalink, onClick }) {
    const handleBasicClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(baseLink);
    };

    const handleDataClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(datalink || baseLink);
    };

    return (
        <div className="course-card" onClick={() => onClick(baseLink)}>
            <div className="card-image">
                <div className="card-blur">
                    <img src={imagesrc || "/placeholder.svg"} alt={alttext} />
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <div className="card-tags">
                    <span
                        className="tag tag-basic"
                        onClick={handleBasicClick}
                        role="button"
                        tabIndex={0}
                    >
                        {name}
                    </span>
                    {data && (
                        <span
                            className="tag tag-data"
                            onClick={handleDataClick}
                            role="button"
                            tabIndex={0}
                        >
                            {data}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Card1;

