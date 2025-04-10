"use client"
//import {cn} from "@/lib/util"
import "./index.css"
import { useNavigate } from "react-router-dom"

function Card1({ imagesrc, alttext, title, name, data, baseLink, datalink }) {
  const navigate = useNavigate()

  const handleBasicClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(baseLink)
  }

  const handleDataClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(datalink || baseLink)
  }

  return (
    <div className="course-card">
      <div className="card-image">
        <div className="card-blur">
        <img src={imagesrc || "/placeholder.svg"} alt={alttext} />
      </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-tags">
          <span className="tag tag-basic" onClick={handleBasicClick} role="button" tabIndex={0}>
            {name}
          </span>
          {data && (
            <span className="tag tag-data" onClick={handleDataClick} role="button" tabIndex={0}>
              {data}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card1

