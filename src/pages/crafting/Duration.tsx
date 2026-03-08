export const Duration = () => {
  return (
    <section>
        <br />
        <div className="grid">
            <p>
                For simple items, the crafting time is equal to the item0s level in hours. For each success 
                level above the required threshold, the crafting time is reduced by 20% of the original 
                duration (20% of an hour is 12 minutes).
            </p>
            <p>
                For complex items, the duration of each phase is 1 hour per targeted item value. As with simple 
                items, for each success level above the required target level, the duration of the respective phase 
                is reduced by 20% (again, 20% is the minimum).
            </p>
        </div>
    </section>
  )
}
