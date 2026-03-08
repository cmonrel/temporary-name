export const Effects = () => {
  return (
    <section>
        <br />

        <div className="grid">
            <p>
                n case of area effects, the area shape can be chosen, and the total area is 3 times the 
                radius squared. Effects cast upon a person that require concentration can be held up 
                only if the person stays in a Control * 10m distance from the caster. 
            </p>

            <div className="panel">
                    <h2 className="panel-title">Attack</h2>
                    <div className="table-wrapper">
                        <table className="table table--vertical">
                            <tbody>
                                <tr>
                                    <th>Standard Attack</th>
                                    <td>The Effect Level of an attack is equal to the base damage it causes. (Duration: Instant)</td>
                                </tr>
                                <tr>
                                    <th>Area Attack</th>
                                    <td>In case of an area attack, the damage multiplied by the area radius is the Effect Level. (Duration: 1 round)</td>
                                </tr>
                                <tr>
                                    <th>Melee Attack</th>
                                    <td>If the magic is used to attack in close combat, the Effect Level is equal to the damage the created weapon deals. (Duration: 1 round)</td>
                                </tr>
                                <tr>
                                    <th>Push/Pull</th>
                                    <td>Effect Level is target CON + pushed/pulled distance in meters (Duration: One round)</td>
                                </tr>
                                <tr>
                                    <th>Trip/Disarm/Steal Item</th>
                                    <td>Effect Level is two times the difficulty for the target to avoid (Duration: Instant)</td>
                                </tr>
                                <tr>
                                    <th>Choke/Hold</th>
                                    <td>Effect Level is three times the difficulty for the target to get out (+ 2 in case of Choke) (Duration: 1 round)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Defense</h2>
                    <div className="table-wrapper">
                        <table className="table table--vertical">
                            <tbody>
                                <tr>
                                    <th>Counterspell</th>
                                    <td>Effect Level is that of the countered spell (Duration: Instant)</td>
                                </tr>
                                <tr>
                                    <th>Shield</th>
                                    <td>The Effect Level is the damage reduction of the shield times the area radius. (Duration: 1 round)</td>
                                </tr>
                                <tr>
                                    <th>Armor</th>
                                    <td>Effect Level is damage reduction times number of protected limbs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Buff</h2>
                    <div className="table-wrapper">
                        <table className="table table--vertical">
                            <tbody>
                                <tr>
                                    <th>Skill</th>
                                    <td>Effect Level is two times the bonus added to a skill.</td>
                                </tr>
                                <tr>
                                    <th>Attribute</th>
                                    <td>Effect Level is three times the bonus added to an attribute.</td>
                                </tr>
                                <tr>
                                    <th>Movement</th>
                                    <td>Effect Level is two times the bonus added to speed.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Debuff</h2>
                    <div className="table-wrapper">
                        <table className="table table--vertical">
                            <tbody>
                                <tr>
                                    <th>Skill</th>
                                    <td>Effect Level is two times the malus subtracted from a skill.</td>
                                </tr>
                                <tr>
                                    <th>Attribute</th>
                                    <td>Effect Level is three times the malus subtracted from an attribute.</td>
                                </tr>
                                <tr>
                                    <th>Movement</th>
                                    <td>Effect Level is two times the malus subtracted from speed.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Information</h2>
                    <div className="table-wrapper">
                        <table className="table table--vertical">
                            <tbody>
                                <tr>
                                    <th>Message</th>
                                    <td>Effect Level rises by 1 for every five words. (Duration: Instant)</td>
                                </tr>
                                <tr>
                                    <th>Communicate (animals, other languages)</th>
                                    <td> Effect Level is 1 for conveying a few simple emotions and 6 for perfect understanding (Duration: 1 round)</td>
                                </tr>
                                <tr>
                                    <th>Scry</th>
                                    <td>Effect Level is 2 for vague glimpse and 12 for perfect image, Level increases in steps of two (Duration: 1 round)</td>
                                </tr>
                                <tr>
                                    <th>Distance call</th>
                                    <td>Effect Level is 3 for vague emotions and 18 for perfect image and sound, Level increases in steps of three (Duration: 1 round)</td>
                                </tr>
                                <tr>
                                    <th>See Future/Past</th>
                                    <td>Effect Level is 6*Information Level for seeing the future and 3*Information Level for seeing the past, where Information Level goes from 1: vague glimpse to 6: clear image (Duration: Instant)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Heal</h2>
                    <div className="table-wrapper">
                        <table className="table table--vertical">
                            <tbody>
                                <tr>
                                    <th>Stabilize Wound</th>
                                    <td>Effect Level is wound severity</td>
                                </tr>
                                <tr>
                                    <th>Heal</th>
                                    <td>Effect Level is two times the number of small wounds healed</td>
                                </tr>
                                <tr>
                                    <th>Mutate (only touch)</th>
                                    <td>Effect Level is damage caused</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Mind</h2>
                    <div className="table-wrapper">
                        <table className="table table--vertical">
                            <tbody>
                                <tr>
                                    <th>Control</th>
                                    <td> Effect Level goes from 2 for a small suggestion to 12 for complete control in steps of two, but the influence can be felt by the target; to go unnoticed, double the Effect Level (Duration: 1 round)</td>
                                </tr>
                                <tr>
                                    <th>Read Mind</th>
                                    <td>Effect Level is the same as for control (noticed and unnoticed), but goes from surface thoughts to deepest psyche</td>
                                </tr>
                                <tr>
                                    <th>Mind Attack</th>
                                    <td>Effect Level is triple the sanity damage done, Resistance is WIL of target</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

            <div className="panel">
                    <h2 className="panel-title">Special</h2>
                    <div className="table-wrapper">
                        <table className="table table--vertical">
                            <tbody>
                                <tr>
                                    <th>Trap/Triggered Effect/Enchantment</th>
                                    <td>
                                        Do one check for the Effect that will be stored (and pay the cost). Then do a check for the enchantment, where the Effect Level describes the duration of the effect.

                                        <div className="bullet-attributes">

                                            <ul>
                                                <li>1 --{'>'} 5 min</li>
                                                <li>2 --{'>'} 30 min</li>
                                                <li>3 --{'>'} 2 hours</li>
                                            </ul>
                                            <ul>
                                                <li>4 --{'>'} 6 hours</li>
                                                <li>5 --{'>'} 12 hours</li>
                                                <li>6 --{'>'} 24 hours</li>
                                            </ul>

                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <th>Conjure Creature/Rise Dead</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Shape Element</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Fly</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Breathe Under Water</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Teleport</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Light</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Illusion</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Muffle Sound</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Invisibility</th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    </section>
  )
}

