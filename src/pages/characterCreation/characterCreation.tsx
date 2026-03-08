import { Attributes } from "./Attributes"
import { BasicInformation } from "./BasicInformation"
import { CollapsiblePanel } from "../../components/CollapsiblePanel/CollapsiblePanel"
import { fillAttributesMagic, fillTable, type AttributeMagic, type Creation } from "./characterCreation.functions"
import { LevelingUp } from "./LevelingUp"
import { Magic } from "./Magic"
import { Skills } from "./Skills"


import "./CharacterCreation.css"

export const CharacterCreation = () => {
    const pointsValues: Creation[] = fillTable();
    const attributesValues: AttributeMagic[] = fillAttributesMagic();

  return (
    <section className="page">
        <header>
            <h2 className="page-title">Character creation</h2>
            <p className="page-subtitle">Forge a name from shadow.</p>
        </header>

        <div className="grid">
            <p>
                This only presents an idea for how to handle character creation
                and levelling up - of course, the DM can change all of this to their
                liking and to fit the world. These rules are based on a more low 
                fantasy setting - where the heroes get stronger but they are not
                suddenly more resistant to damage.
            </p>
            
            <CollapsiblePanel title="Starting information" subtitle="Each Character has these basic skills">
                <BasicInformation />
            </CollapsiblePanel>
            
            <CollapsiblePanel title="Points per level" subtitle="This table shows how levelling up increases creation points. They can either
                be spent on skills or attributes by paying the cost stated above. An average
                human counts as level 0. The minimum for an attribute is 1 (the cost for this 
                has to be paid). The minimum for a skill is 0.">
                <LevelingUp values={pointsValues} />
            </CollapsiblePanel>

            <CollapsiblePanel title="Attributes" subtitle="When levelling up, the character gets more attribute and skill points.
                Attributes are rated from 1 to 6.">
                <Attributes attrs={attributesValues} />
            </CollapsiblePanel>

            <CollapsiblePanel title="Skills" subtitle="Skills are rated from 0 to 12. Here is a rough breakdown. The last
                line shows how many creation points have to be paid to level up in
                the various stages.">
                <Skills />
            </CollapsiblePanel>

            <CollapsiblePanel title="Magic" subtitle="As the magic chapter is still under construction, this part is also temporal. 
                Idea: Value of Power/Control (Authority is the sum)">
                <Magic />
            </CollapsiblePanel>
            
            <CollapsiblePanel title="Dependent attributes" subtitle="The following values are not levelled on their own but depend on
                        various attributes:">
                <br />
                <div className="table-wrapple">
                    <table className="table table--vertical">
                        <tbody>
                            <tr>
                                <th>Speed</th>
                                <td>2 + ((MOT + CON) / 2)</td>
                            </tr>

                            <tr>
                                <th>Mental stability</th>
                                <td>5 + ((WIT + WILL) / 2)</td>
                            </tr>

                            <tr>
                                <th>Blood points</th>
                                <td>10 + (CON / 2)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CollapsiblePanel>
        </div>
    </section>
  )
}

