import React from "react"
import { Link } from "react-router-dom";

function HomeSection({title, link, content, img, alt}) {
    return (
        <>
        <img src={img} alt={alt} />
        <Link to={link}> <h2>{title}</h2></Link>
        <p>{content}</p>
        </>
    )
}

export default HomeSection