export const Main_Actions = () => {
  return (
    <section>
        <br />

        <div className="table-wrapper grid">
            <h3>Basic actions</h3>
            <table className="table table--vertical">
                <thead>
                    <tr>
                        <th>Take/Drop an item</th>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>o</th>
                        <td>
                            Take an item from the floor
                        </td>
                    </tr>

                    <tr>
                        <th>oo</th>
                        <td>
                            Take an item from the backpack
                        </td>
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <th>Taking care of wounds</th>
                        <td></td>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <th>o</th>
                        <td>
                            Apply pressure --`{">"}` no blood points lost this round
                        </td>
                    </tr>

                    <tr>
                        <th>oo</th>
                        <td>
                            Bandage wound (prerequisite: have something to bandage in hand) --`{">"}` check for 
                            `{"<"}`MIN`{">"}` medicine, per success, one severe wound is bandaged and bleeding is stopped
                        </td>
                    </tr>

                </tbody>
                
                <thead>
                    <tr>
                        <th>Move</th>
                        <td></td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th>o</th>
                        <td>Move carefully --`{">"}` Move 1m, +2 bonus to sneaking</td>
                    </tr>

                    <tr>
                        <th>oo</th>
                        <td>
                            Sprint --`{">"}` Move speed x 3m
                        </td>
                    </tr>
                </tbody>
                
                <thead>
                    <tr>
                        <th>Prepare next action/Help</th>
                        <td></td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th>o</th>
                        <td>
                            Can be used to trick, trap or incite someone --`{">"}` Roll an appropriate skill check (2), 
                            the Quality divided by two can be used as a bonus for the next action against this target.
                        </td>
                    </tr>
                </tbody>
                
                <thead>
                    <tr>
                        <th>Skill check</th>
                        <td></td>
                    </tr>
                </thead>    
                
                <tbody>
                    <tr>
                        <th>X</th>
                        <td>
                            The duration depends on the task. If a certain amount of Points has to be reached, sum the check Quality 
                            until the threshold is met.
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <br />

            <h3>Close combat actions</h3>
            <h4>Armed actions</h4>
            <br />
            
            <div className="table-wrapper">
                <table className="table table--vertical">
                    <thead>
                        <tr>
                            <th>Standard combat action</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Check for `{"<"}`MOT`{">"}` martial skill. The difficulty of the check is the level of the opponent. On a 
                                successful check, the player deals his weapon damage plus the Quality of the check as additional damage. If they 
                                fail, they take the weapon damage of their opponent as well as the (negative) Quality. If the difficulty is 
                                exactly met, both parties deal their weapon damage.
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Defensive/Offensive combat action</th>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Splits the Quality of your combat check into Defence and Attack. The Attack has -X and the Defence +X (or the other 
                                way around). X can be chosen from 1-CON and has to be declared before the check.
                            </td>
                            
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Push back/Knock over</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                If your combat check is successful, the Quality doesn't add extra damage but acts as a bonus for a CON check against your 
                                opponent. If successful, they are pushed back the Quality in meters/knocked down.
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Steal item/Disarm</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                If your combat check is successful, the Quality doesn't add extra damage but acts as a bonus for a MOT check against your 
                                opponent. If successful, you can take the item/the opponent is disarmed.
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Aimed attack</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Penalty of -2 on the check for hitting the head or torso. Penalty of -1 to hit a specific limb.
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Swipe attack</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Attack all enemies surrounding you at once. Take the normal penalty for fighting multiple enemies. Every enemy individually 
                                dodges/counterattacks. Your defence is lowered by one for each targeted enemy.
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Charge attack</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>oo</th>
                            <td>
                                The first action is considered a sprint. The second is a standard attack but deals your speed as additional damage (even if 
                                you are the one hit).
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />

            <h4>Unarmed actions</h4>
            <br />
            
            <div className="table table--vertical">

                <table className="table table--vertical">
                    <thead>
                        <tr>
                            <th>Kick/Punch</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Check on MOT/CON + unarmed martial skill. The damage dealt is equal to the Quality of the check.
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Grab (grappling)</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                If successful, the opponent has the restrained conditions (see below for details). The opponent can break free if they win the compared grappling check.
                            </td>
                        </tr>
                        </tbody>
                    
                    <thead>
                        <tr>
                            <th>Strangle (grappling)</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Only from grappling. If successful, the opponent gets the restrained condition. After 3 rounds of uninterrupted strangling, the opponent gets 
                                the unconscious condition for the next X rounds. X is the number of successes after rolling 6 D6.
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Throw (grappling)</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Only from grappling. If successful, the opponent is prone and takes damage equal to the Quality. 
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Pin (grappling)</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Only against a prone opponent. If successful, the target gains the immobilised condition.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />

            <h4>Ranged attacks</h4>
            <br />
            
            <div className="table-wrapper">
                <table className="table table--vertical">
                    <thead>
                        <tr>
                            <th>Standard ranged action</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody></tbody>
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Roll a ranged combat skill against the target difficulty. The difficulty consists of size, distance, movement, dodge 
                                and sight of the target. 
                            </td>
                        </tr>
                        </tbody>
                    
                    <thead>
                        <tr>
                            <th>Aim (maximum 2 times in a row)</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Difficulty is lowered by 1.
                            </td>
                        </tr>
                        </tbody>
                    
                    <thead>
                        <tr>
                            <th>Reload</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>X</th>
                            <td>
                                X depends on the weapon. Make a check on `{"<"}`FIN`{">"}` weapon skill to shorten the reload action by Quality/2, 
                                with a minimum duration of 1. Someone can be reloaded during a side action.
                            </td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>Fast fire</th>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>o</th>
                            <td>
                                Only for weapons with a fast fire possibility. Roll ranged attacks against X targets. On top of the normal difficulty of each shot.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </section>
  )
}

