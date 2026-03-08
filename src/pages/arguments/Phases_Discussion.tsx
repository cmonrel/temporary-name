export const Phases_Discussion = () => {
  return (
    <section>
      <header>
        <h2 className="panel-title">Phases in a discussion round</h2>
      </header>
      <ol>
        <li>
          <h4>Attacker phase</h4>
          <p>
            The starting party chooses an argument level to present and then rolls a check 
            against its level.
          </p>
        </li>

        <li>
          <h4>Defense phase</h4>
          <p>
            The defending party chooses an argument level to counter the attacking argument.
          </p>
        </li>

        <li>
          <h4>Evaluation phase</h4>
          <p>
            The defending party takes the difference between the arguments' levels as damage (only 
            if the attacking level was higher). Any failed check counts as level 0. The winner of 
            this round is the default attacker of the next round.
          </p>
        </li>

        <li>
          <h4>Strategy phase</h4>
          <p>
            Every party that succeeds its check gets a +1 bonus for the next round. The loser of this 
            round can sacrifice 1 discussion point to be the attacker of the next round instead. Each party 
            can decide to give up the discussion and yield to the other.
          </p>
        </li>
      </ol>
    </section>
  )
}

