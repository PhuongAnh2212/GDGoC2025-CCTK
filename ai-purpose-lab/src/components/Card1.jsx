<<<<<<< Updated upstream
<<<<<<< Updated upstream
"use client"
import "./Card1.css"
import { useState } from "react"

function Card1({
  imagesrc,
  alttext,
  title,
  name,
  data,
  baseLink,
  datalink,
  onBasicClick,
  onDataClick,
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="course-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <div className="card-blur" onClick={onBasicClick}>
          <img
            src={imagesrc || "/placeholder.svg"}
            alt={alttext}
            className={isHovered ? "hovered" : ""}
          />
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-tags">
          <span
            className="tag tag-basic"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onBasicClick?.()
            }}
            role="button"
            tabIndex={0}
          >
            {name}
          </span>
          {data && (
            <span
              className="tag tag-data"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onDataClick?.()
              }}
              role="button"
              tabIndex={0}
            >
              {data}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
export default Card1
=======
=======
>>>>>>> Stashed changes
"use client";
import "../pages/style/Card1.css";

function Card1({ imagesrc, alttext, title, name, data, baseLink, datalink, onClick }) {
    const handleBasicClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(baseLink); // Sử dụng onClick prop
    };

    const handleDataClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(datalink || baseLink); // Sử dụng onClick prop
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

<<<<<<< Updated upstream
export default Card1;
>>>>>>> Stashed changes
=======
export default Card1;
>>>>>>> Stashed changes
