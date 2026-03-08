export const Combat_Conditions = () => {
  return (
    <section>
        <br />
        
        <div className="table-wrapper">
            <table className="table table--vertical">
                <tbody>
                    <tr>
                        <th>Blind</th>
                        <td>-3 for all checks</td>
                    </tr>

                    <tr>
                        <th>Bleeding</th>
                        <td>Loose one blood point per round at the beginning of a round</td>
                    </tr>

                    <tr>
                        <th>Burning</th>
                        <td>One wound per round at the burning body part</td>
                    </tr>

                    <tr>
                        <th>Prone</th>
                        <td>-2 for all checks</td>
                    </tr>

                    <tr>
                        <th>Restrained</th>
                        <td>-1 for all checks, no movement possible</td>
                    </tr>

                    <tr>
                        <th>Immobilized</th>
                        <td>-3 to all checks, no movement possible</td>
                    </tr>

                    <tr>
                        <th>Confused</th>
                        <td>Next main action can't be used, the condition ends</td>
                    </tr>

                    <tr>
                        <th>Afraid</th>
                        <td>Next action must be used to get away from the source of fear. A successful check on WIL ends this condition.</td>
                    </tr>

                    <tr>
                        <th>Unconscious</th>
                        <td>No actions possible</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

