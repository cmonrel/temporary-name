export const Skill_Checks = () => {
  return (
    <section>
        <br />
        <div className="grid">
            <p>
                If a check is called, add your used basic attribute
                and skill together. Now add or subtract any penalties
                (e.g., from advantages/disadvantages or circumstances). That’s
                how many dice (D6) you roll. 1-3 is a failure, 4-6 is a success.
            </p>
            <p>
                If you have as many successes as the difficulty of the check
                the check is successful. The total number of successes is called Grade.
                The difference between the Grade and Difficulty is called Quality, and can
                can be negative if you failed.
            </p>
            <p>
                The notation of checks will be like this: {'<'}basic attribute{'>'}
                skill +/- bonus/penalty (difficulty)
            </p>
        </div>
    </section>
  )
}

