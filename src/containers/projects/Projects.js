import React, { useEffect, useState, useRef } from "react";
import "./Projects.css"

export function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const carouselRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://api.github.com/users/shivroymet/repos");
                const data = await response.json();

                const projectDetails = await Promise.all(data.map(async (element) => {
                    const languagesResponse = await fetch(element.languages_url);
                    const languagesData = await languagesResponse.json();
                    const forksResponse = await fetch(element.forks_url);
                    const forksData = await forksResponse.json();

                    return {
                        name: element.full_name,
                        stargazers_count: element.stargazers_count,
                        languages: Object.keys(languagesData),
                        url: element.html_url,
                        description: element.description,
                        forks: forksData,
                        forks_count: element.forks_count
                    };
                }));

                setProjects(projectDetails);
                setIsLoading(false);
                console.log(projectDetails);
            } catch (error) {
                setIsLoading(true);
                console.error('Error fetching projects:', error);
            }
        }
        fetchData();




        const carousel = document.querySelector(".slides");

        let isDragStart = false, prevPageX, prevScrollLeft,posDiff;
        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = carousel.scrollLeft;
        }



        const dragStop = () => {
            isDragStart = false;
            carousel.classList.remove("dragging")
        }

        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            carousel.classList.add("dragging")
    
            posDiff = (e.pageX || e.touches[0].pageX) - prevPageX
            carousel.scrollLeft = prevScrollLeft - posDiff;
        }
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);
        carousel.addEventListener("mousemove", dragging)
        carousel.addEventListener("touchmove", dragging)
        carousel.addEventListener("mouseup", dragStop)
        carousel.addEventListener("mouseleave", dragStop)
        carousel.addEventListener("touchend", dragStop)

    },[])

    const showHidden = (carouselRef) => {
        let scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

        carouselRef.current.querySelectorAll("i")[0].style.display = carouselRef.current.scrollLeft == 0 ? "none" : "block";

        carouselRef.current.querySelectorAll("i")[1].style.display =  carouselRef.current.scrollLeft == scrollWidth ? "none": "block";
        // 
    }

    const handleScroll = (direction) => {
        if (carouselRef.current) {
            const projectTile = carouselRef.current.querySelectorAll(".slide-item");
            let tileWidth = projectTile[0].clientWidth + 20;
            carouselRef.current.scrollLeft += direction === 'left' ? -tileWidth : tileWidth;
            setTimeout(() => showHidden(carouselRef), 60);
        }
    };
    return <div>
        <div className="project-slide">
            <div className="slides" ref={carouselRef}>

                <i id="left" className="fa-solid fa-angle-left" onClick={() => handleScroll('left')}></i>
                <>
                    {isLoading ? <></> : (
                        <>
                            {projects.map((item, index) => (
                                <div key={index} className="container-slide slide-item" draggable="false">
                                    <div className="name-container">
                                        <div className="git-icon-contain">
                                            <div className="git-icon"></div>
                                        </div>

                                        <div className="full-name-contain">
                                            <a className="full-name" href={item.url}>{item.name}</a>
                                            <div className="full-name-desc">{item.description}</div>
                                        </div>
                                    </div>
                                    <div className="details-container-git">
                                        <div className="languages">
                                            {item.languages.map((content, idx) => (
                                                <div key={idx} className="language-1">
                                                </div>
                                            ))}
                                        </div>
                                        <div className="stars">
                                            <div className="star-icon"></div>
                                            {item.stargazers_count}
                                            <div className="fork-icon"></div>
                                            {item.forks_count}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </>
            <i id="right" className="fa-solid fa-angle-right" onClick={() => handleScroll('right')}></i>
            </div>

        </div>
    </div>
}