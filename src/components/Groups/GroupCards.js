import React from "react";

function GroupCard(props) {
    const {title, imageUrl} = props.group;
    return(
        <div className="card  bg-dark shadow h-100">
            <img className="card-img-top"
            src={imageUrl}
            alt={title} 
            />
            <div className="card-body">
                <h6 className="card-title text-light">{title}</h6>
                <button type="button" className="btn btn-sm btn-primary">Request Access <i class="fas fa-lock"></i></button>
                <a href="/" className="stretched-link"></a>
            </div>
        </div>
    );
}

export default GroupCard;
