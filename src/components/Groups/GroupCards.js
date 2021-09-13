import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function GroupCard(props) {
    const {title, imageUrl} = props.group;
    return(
        <div className="card  bg-dark shadow h-100" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <img className="card-img-top"
            src={imageUrl}
            alt={title} 
            />
            <div className="card-body">
                <h6 className="card-title text-light">{title}</h6>
                <a href="/" type="button" className="btn btn-sm btn-primary">Request Access <i class="fas fa-lock"></i></a>
            </div>
        </div>
    );
}

export default GroupCard;
