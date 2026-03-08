export const Side_Actions = () => {
  return (
    <section>        
        <br />

        <div className="table-wrapper">
            <table className="table table--vertical">
                <tbody>
                    <tr>
                        <th>Move</th>
                        <td>
                            (Only if the main action is not move):
                                <ul>
                                    <li>Stand up: -3 penalty for main action</li>
                                    <li>Walk: move the speed in meters</li>
                                    <li>Run: move the speed x 2 in meters, penalty of -2 for main action</li>
                                </ul>
                        </td>
                    </tr>

                    <tr>
                        <th>Talk</th>
                        <td>
                            Say one sentence
                        </td>
                    </tr>

                    <tr>
                        <th>Think</th>
                        <td>
                            Skill check that is based on knowledge. Penalty of -2 for main action.
                        </td>
                    </tr>

                    <tr>
                        <th>Reload</th>
                        <td>
                            Some ranged weapons only need a side action to reload, but others need full actions. Check the weapon card to see what applies.
                        </td>
                    </tr>

                    <tr>
                        <th>Item</th>
                        <td>
                            Drop item/weapon. Take the item/weapon from the belt.
                        </td>
                    </tr>

                    <tr>
                        <th>Dodge</th>
                        <td>
                            Avoid ranged or close combat attacks from one direction. Roll separately for each dodged attack and take a penalty of the number of 
                            dodged attacks and takes a penalty of the number of dodged attacks halved. Check on MOT, the successes count as your resistance/defence value. 
                            Diving to the ground gives a +2 bonus to dodge, but the character is then on the ground.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}