import React from "react";
import GroupCard from "./GroupCard";
import Image from '../../images/logo1.png';
import { Link } from 'react-router-dom';

function GroupSection() {
    const groups = [
        {
            id: 1,
            title: "Full Stack Development",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        },
        {
            id: 2,
            title: "Front-End Development",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        },
        {
            id: 3,
            title: "Backend Development",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        },
        {
            id: 4,
            title: "Android App Development",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        },
        {
            id: 5,
            title: "Machine Learning",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        },
        {
            id: 6,
            title: "Data Science",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        },
        {
            id: 7,
            title: "Game Development",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        },
        {
            id: 8,
            title: "Programming in Python",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        },
        {
            id: 9,
            title: "Programming in JAVA",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        },

    ];

    return(
        <div className="container text-center">
            <Link to='/'><img className="Icon" src={Image} width="300px" /></Link>
            <h1 className="font-weight-light text-light">
                Tech<span className="text-info">Snap</span> Chat
            </h1>
            <div className="lead text-info">Welcome to TechSnap Chat, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore tempor ut labore exercitation. </div>       
            <div className="row my-5 pt-3">
                {
                    groups.map((group) => (
                        <div key={group.id} className="col-12 col-md-4 my-2 p-5">
                            <GroupCard group={group} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GroupSection;
