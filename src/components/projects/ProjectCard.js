import { useEffect } from "react";
import "./ProjectCard.css"

export function ProjectCard(){

    async function logMovies() {
        const response = await fetch("https://api.github.com/users/shivroymet/repos").then(response => {return response.json()}).then(async (data) => {
          const arr=[];
          await data.forEach( async element => {
            // console.log(element.name);
            // console.log(element.full_name);
            // console.log(element.stargazers_count);
            arr.push(await fetch(element.languages_url).then(res => {return res.json()}).then(data=>{ 
              return {name: element.full_name, stargazers_count:element.stargazers_count, languages:Object.keys(data), url: element.html_url, description:element.description}
              }));
            
          })  ;
          // console.log(await arr);
          return arr;
        });
        
        console.log(response);
      
       
      }
      useEffect(()=>{
        logMovies();
      })
    return  <div id="container">
    <div className="name-container">
        <div className="git-icon"></div>
        <div className="full-name">
            <a  className="full-name" src="https://github.com/shivroymet/METCS-673-Team7-Project">shivroymet/METCS-673-Team7-Project</a>
            <div className="full-name-desc">This is description of the repository. It give nothing. This is to fill the space</div>
        </div>
    </div>
    <div className="details-container-git">
        <div className="languages">
                <div className="language-1"></div>
                <div className="language-2"></div>
                <div className="language-3"></div>
                <div className="language-4"></div>
                <div className="language-1"></div>        
        </div>
        <div className="stars"><div className="star-icon"></div>5<div className="fork-icon"></div>0</div>
    </div>
</div>

}