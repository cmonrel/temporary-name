export const Arguments_level = () => {
  return (
    <section>
        <header>
            <h2 className="panel-title">Arguments levels</h2>
        </header>
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Quality</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            Insult, bribery, threat, repetition of previous argument, joke, diversion
                        </td>
                    </tr>
                    
                    <tr>
                        <td>2</td>
                        <td>
                            General statement, analogy, fallacious argument (argument does not actually fit the topic), 
                            accusation, straw man argument (exaggeration of the opposing argument)
                        </td>
                    </tr>
                    
                    <tr>
                        <td>3</td>
                        <td>
                            Reason, anecdote, emotional influence, complex question
                        </td>
                    </tr>
                    
                    <tr>
                        <td>4</td>
                        <td>
                            Indictment, sophisticated deception/lie, scandal, revelation
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}
