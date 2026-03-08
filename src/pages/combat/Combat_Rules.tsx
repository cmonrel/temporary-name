export const Combat_Rules = () => {
  return (
    <section>
        <br />
        <section className="combat-grid">
            <h3>Combat checks</h3>
            <h4>Close combat</h4>
            <p>
                Close combat checks use Motos’s skills as base attribute together with
                the chosen combat skill, which is compared to the enemy's check (or level). 
                On a successful check, the player deals his weapon damage as well as the Quality 
                of the check as additional damage. If they fail, they take the weapon damage of 
                their opponent as well as the (negative) Quality. If the difficulty is exactly met
                both parties deal their weapon damage.
            </p>
            
            <h4>Ranged combat</h4>
            <p>
                Ranged attack  checks also use Motor skills as base attribute, but the difficulty
                for the check consists of target size, distance, movement, resistance and sight. Equal 
                to the close combat, the Quality counts as extra damage points. If you miss while 
                shooting into a melee, it is possible that you hit another person instead. The DM will 
                decide a roll for the probability of that.
            </p>

            <p>To determine the hit body part roll on the hit location table.</p>

            <div className="grid">
                <h4>Hit location table (ranged attack and close combat)</h4>
                <p> A D6 is rolled to determine the hit body part </p>
            </div>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Head</th>
                            <th>Torso</th>
                            <th>Left Arm</th>
                            <th>Right Arm</th>
                            <th>Left Leg</th>
                            <th>Right Leg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>6</td>
                            <td>5</td>
                            <td>4</td>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="grid">
                <h4>Size table (ranged attack)</h4>
                <p> The difficulty is the base difficulty for ranged attacks. Prone targets count as one size smaller </p>
                <div className="table-wrapper grid">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Example</th>
                                <td>Dragon</td>
                                <td>Blue whale</td>
                                <td>Giant</td>
                                <td>Elephant</td>
                                <td>Horse</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Ranged Difficulty</th>
                                <td>-5</td>
                                <td>-4</td>
                                <td>-3</td>
                                <td>-2</td>
                                <td>-1</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Example</th>
                                <td>Human body</td>
                                <td>Torso</td>
                                <td>Head</td>
                                <td>Hand</td>
                                <td>Human eye</td>
                                <td>Fly</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Ranged Difficulty</th>
                                <td>0</td>
                                <td>+1</td>
                                <td>+2</td>
                                <td>+3</td>
                                <td>+4</td>
                                <td>+5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid">
                <h4>Distance (ranged attack)</h4>
                <p> 
                    Each ranged weapon has a maximum distance (written on the item card), 
                    its not possible to hit a target that is further away. Attacking from 
                    a closer distance than A counts as close combat check (on martial arts).
                </p>
            </div>

            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Distance</th>
                            <td>2 - 5m</td>
                            <td>5 - 15m</td>
                            <td>15 - 50m</td>
                            <td>50 - 100m</td>
                            <td>100 - 500m</td>
                            <td>500 - 1000m</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Difficulty</th>
                            <td>0</td>
                            <td>+1</td>
                            <td>+2</td>
                            <td>+3</td>
                            <td>+4</td>
                            <td>+5</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="grid">
                <h4>Movement (ranged attack)</h4>
                <p> 
                    Movement of the target and attacker is both relevant.
                </p>

            </div>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Movement</th>
                            <td>None</td>
                            <td>Slow</td>
                            <td>Fast but evenly</td>
                            <td>Chaotic</td>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Difficulty</th>
                            <td>0</td>
                            <td>+1</td>
                            <td>+2</td>
                            <td>+3</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="grid">
                <h4>Dodge (ranged attack)</h4>
                <p> 
                    If the target decides to dodge, the success level of their MOT 
                    check is added to the check. --{">"} see Side actions: Dodge
                </p>

            </div>
            <div>
                <h4>Sight (ranged attack)</h4>
            </div>

            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sight</th>
                            <td>Good</td>
                            <td>Impaired</td>
                            <td>Bad</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Difficulty</th>
                            <td>0</td>
                            <td>+1</td>
                            <td>+2</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="grid">
                <h4>Fighting multiple/bigger opponents</h4>
                <div>
                    <p>
                        In close combat, it's possible to fight against multiple opponents. 
                        Per additional opponent attacked or dodged, a penalty of -2 is placed 
                        upon all combat checks.
                    </p>
                    <p>
                        An opponent one size level bigger counts as two opponents of equal size. 
                        So checks against bigger opponents always have a penalty. (So, 512 eyes 
                        would have to fight against one dragon for the battle to be evenly matched.)
                    </p>
                </div>
            </div>

            <div className="grid">
                <h4> Shield combat/ Armour </h4>
                <p>
                    Having a shield in close combat separates your combat roll in attack 
                    and defence value. Your shield bonus is added to the defence value (after 
                    the check and also for dodging). Each shield has an obstruction penalty that 
                    applies to all body-related checks, except attacks.
                </p>
                <p>
                    Armour reduces damage to a body part by the level of the armour. They have an 
                    obstruction penalty that applies to all body-related checks (attacks too).
                </p>
            </div>

            <div className="grid">
                <h4>Sneack attack</h4>
                <p>
                    Attacking an unaware opponent means rolling your close combat attack against the 
                    difficulty of 0.
                </p>
            </div>

            <div className="grid">
                <h4>Bleeding wounds and unconsciousness</h4>
                <p>
                    Each attack with a sharp weapon that directly causes a severe wound (without accumulating 
                    points) roll one d6, on a success, the attack causes a bleeding wound.
                </p>
                <p>
                    Each attack with a 
                    blunt weapon that directly causes a severe wound on the head, knocks your opponent out for 
                    1D6 combat rounds. If it directly causes two severe wounds, they get knocked out for 3D6 combat 
                    rounds. More on wounds, bleeding and unconsciousness is explained later.
                </p>
            </div>

            <div className="grid">
                <h4> Long actions </h4>
                <p>
                    Some actions take longer than one combat round. If the character gets hit during the task 
                    they must roll a check on {"<"}WILL{">"} -X (1). X is the number of severe wounds caused 
                    by the attack. On a fail the task is interrupted.
                </p>
            </div>

            <div className="grid">
                <h4>Area attacks</h4>
                <p>
                    Some weapons have an area attack (e.g. grenades). The weapon card states the radius of the affected area 
                    area in meters
                </p>
                <p>
                    The maximum distance of a ranged weapon applies to the centre of the area of attack. Up to half 
                    the radius of the whole damage is dealt, the outer ring only deals half damage. Damage is spread 
                    evenly on all body parts. Dodging/Movement can be used to escape the range.
                </p>
            </div>

            <div className="grid">
                <h4>Distances</h4>
                <p> Close combat weapons can have the following distance classes: </p>
                <ul>
                    <li>Long (2-3m)</li>
                    <li>Middle (1-2m)</li>
                    <li>Short (0-1m)</li> 
                </ul>
                <p>
                    When fighting at the wrong distance, you get a penalty of -1.
                </p>
                <p>
                    Every time a combat check is evaluated, the winner can adjust the start distance for the 
                    next round to their liking.
                </p>
            </div>

            <div className="grid">
                <h4>Lying on the ground (prone)/ Standing up</h4>
                <p>
                    When on the ground, you get a basic -2 penalty on close combat checks. Standing up gives you a -3 penalty.
                </p>
            </div>

            <div className="grid">
                <h4>Unarmed combat/Grappling</h4>
                <p>
                    Unarmed attacks use MOT or CON as base attribute. It is allowed to hold a weapon in one hand while 
                    doing an unarmed attack (for kicks, two-handed weapons are ok). Fighting unarmed against and armed 
                    opponent gives a penalty of -2 (on top of the distance penalty). Hitting/Kicking armour without having 
                    armour gives you half the damage you deal. Grappling actions give their Quality as a bonus to the next 
                    grappling action. The opponent can break free if they win the compared grappling check.
                </p>
            </div>

            <div className="grid">
                <h4>Critical hits</h4>
                <p>
                    Aiming for critical body parts is hard, but it can severely increase the damage. It represents 
                    hitting the eye, the heart or a similar devastating location. For ranged attacks, the 
                    difficulty is automatically adapted by choosing the adequate size. Close combat attacks 
                    suffer a -4 penalty for attacking a critical point (using the aimed attack action). If the 
                    attack succeeds, its damage is doubled.
                </p>
            </div>
        </section>
    </section>
  )
}

