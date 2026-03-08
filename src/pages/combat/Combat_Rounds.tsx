export const Combat_Rounds = () => {
  return (
    <section>
        <br />

        <h3>Phases in a round</h3>

        <ol>
            <li>
                <div>Player phase</div>
                <p>
                    Each Player picks a main action and up to two side actions. The order of that
                    can be chosen by the players each round. They can also choose to wait after
                    the Opponent phase to choose their actions.
            </p>
            </li>

            <li>
                <div>Opponent phase</div>
                <p>
                    Opponents react to the actions of the players.
                </p>
            </li>

            <li>
                <div>Player phase</div>
                <p>
                    Players who did not choose an action before can do so now.
                </p>
            </li>

            <li>
                <div>Resolution</div>
                <p>
                    Now the round gets resolved, and all players roll their dice
                </p>
            </li>
        </ol>
    </section>
  )
}