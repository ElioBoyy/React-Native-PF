import { useState } from "react";
import './Job.css';
import { urlRegex } from '../../data/techno';

interface JobProps {
    job: any;
}

function Job({ job }: JobProps) {

    const [isExpanded, setIsExpanded] = useState(false);

    const [buttonText, setButtonText] = useState("+");
    const handleClick = () => {
        invIsExpanded();
        setButtonText((prevText) => (prevText === "+" ? "-" : "+"));
    };

    const invIsExpanded = () => {
        setIsExpanded((prev) => !prev)
    }

    return (
        <article className="job-article">
            <div className="compagny">
                <h3>{job[0]}</h3>
                <a href={job[2]} target="_blank">
                    <img
                        src={job[1]}
                        alt=""
                    />
                </a>
            </div>
            <div className="job">
                <p className="libelle-job">{job[3]}</p>
                <p dangerouslySetInnerHTML={{ __html: job[4] }}></p>
            </div>
            <div className={`content ${isExpanded ? 'active' : ''}`}>
                <h2>Hard skills</h2>
                <div className="flex-skills">
                    {
                        job[5].map((techno: string) => (
                            urlRegex.test(techno) ? (
                                <p className="p_badges" dangerouslySetInnerHTML={{ __html: techno }}></p>
                            ) : (
                                <img src={techno} alt="" className="github_badges" key={techno} />
                            )
                        ))
                    }
                </div>

                <h2>Soft skills</h2>
                <div className="flex-skills">
                    {
                        job[6].map((techno: string) => (
                            urlRegex.test(techno) ? (
                                <p className="p_badges" dangerouslySetInnerHTML={{ __html: techno }}></p>
                            ) : (
                                <img src={techno} alt="" className="github_badges" key={techno} />
                            )
                        ))
                    }
                </div>
            </div>
            <button className="open_more_infos" onClick={handleClick}>{buttonText}</button>
        </article>)
}

export default Job;