import React from 'react';
import ReactDOM from 'react-dom';

import useForm from './hooks/useForm'

import './App.css';

function App() {

  const [{ values, loading }, handleChange, handleSubmit] = useForm()

  const listUl = () => {
    const valueLis = values.message.split('\n')
    const lisNoTrim = valueLis.filter(linha => linha.trim())
    let lis = lisNoTrim.map((li, i) => `\t<li>${li}</li>`)
    const result = lis.join('\n')

    const element = (
      <div>
        <h3>List starting successfully</h3>
        <table>
          <tbody>
            <tr>
              <td><pre><code>{`<ul>\n${result}\n</ul>`}</code></pre></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    ReactDOM.render(element, document.getElementById('texto'));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>li generator</h1>
      </header>
      <section>
        <form onSubmit={handleSubmit(listUl)}>
          <textarea
            onChange={handleChange}
            name="message"
            placeholder="Insert the list"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">
            {loading ? 'Process...' : 'Lets Go!'}
          </button>
        </form>
      </section>
      <section id="texto"></section>
    </div>
  );

}

export default App;
