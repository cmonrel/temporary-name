import { useNavigate } from "react-router";

export const BasicInformation = () => {
  const navigate = useNavigate();
  
    return (
    <section>
        <br />
        <div className="grid">
            
            <div className="basic-skills">
                <ul>
                    <li>Animal handling</li>
                    <li>Athletics</li>
                    <li>General knowledge</li>
                    <li>Insight</li>
                    <li>Investigation</li>
                    <li>Medicine</li>
                </ul>
                <ul>
                    <li>Nature</li>
                    <li>Perception</li>
                    <li>Performance</li>
                    <li>Rhethoric</li>
                    <li>Self-control</li>
                    <li>Stealth</li>
                </ul>

            </div>

            <p>
                Every character can have additional skills that reflect their
                profession or personal acquired knowledge. The player can decide 
                how many skills they want to add. Using vague skills allows for more 
                different applications but can half the bonus from the skill (e.g. The 
                skill "music" gives only half if it bonus for playing an instrument). Specific 
                skills (e.g. "Lockpicking") are limited in application but give a full bonus for checks.
            </p>

            <p>
                Based on the starting level, there is a certain number of creation points 
                available that can be used to increase attribute and skill values by paying 
                their cost. You have to pay the cost for each level (e.g. levelling up MOT to 
                3 costs 1+2+3 = 6 creation points). Only upon character creation, the Influence 
                level can be increased by creation points with the same cost as attributes. More 
                information upon <b className="pointer" onClick={() => navigate("/items-influence")}>Influence</b>.
            </p>
        </div>
    </section>
  )
}

