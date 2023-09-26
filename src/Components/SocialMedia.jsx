import React from "react";
import {BsTwitter, BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';


const SocialMedia = () => {
    let url = "https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react";
    return(
        <div className = "app__social">
            <div>
                
                <BsLinkedin/>
            </div>

            <div>
                <BsTwitter/>
            </div>

            <div>
                
                <FaGithub><a href={url}>LinkedIn handle</a></FaGithub>
                
            </div>

        </div>
    )
}

export default SocialMedia