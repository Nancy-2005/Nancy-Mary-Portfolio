import React from 'react'; 
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiDatabase } from "react-icons/di";
import { SiExpress, SiMongodb, SiQt } from "react-icons/si"; // SiQt used for QML representation (Qt framework)
import { GiArtificialIntelligence } from "react-icons/gi"; // Import AI icon

const Skills = ({ skill }) => {
    const icon = {
        Python: <FaPython />,
        Java: <FaJava />,
        MongoDb: <SiMongodb />,
        SQL: <DiDatabase />,
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        Javascript: <DiJavascript1 />,
        React: <FaReact />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        QML: <SiQt /> || <span>QML</span>, // Fallback if icon doesn't load
        "AI & ML": <GiArtificialIntelligence />, // Add AI & ML skill with icon
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill] || <span>{skill}</span>} {/* Show icon or fallback text */}
        </div>
    );
};

export default Skills;