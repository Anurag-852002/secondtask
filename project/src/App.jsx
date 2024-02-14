
import './App.css'
import React, { useState } from 'react';

function DirectorAndMovies() {
  const [directors, setDirectors] = useState([{ name: '', movie: '' }]);

  const handleNameChange = (index, event) => {
    const newDirectors = [...directors];
    newDirectors[index].name = event.target.value;
    setDirectors(newDirectors);
  };

  const handleMovieChange = (index, event) => {
    const newDirectors = [...directors];
    newDirectors[index].movie = event.target.value;
    setDirectors(newDirectors);
  };

  const addDirector = () => {
    const newDirectors = [...directors];
    newDirectors.push({ name: '', movie: '' });
    setDirectors(newDirectors);
  };

  const removeDirector = (index) => {
    const newDirectors = [...directors];
    newDirectors.splice(index, 1);
    setDirectors(newDirectors);
  };

  return (
    <div>
      <h1><center>Director and Movies</center></h1>
      <table>
        <thead>
          <tr>
            <th>Director Name</th>
            <th>Movie Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={director.name}
                  onChange={(event) => handleNameChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={director.movie}
                  onChange={(event) => handleMovieChange(index, event)}
                />
              </td>
              <td>
                <button onClick={() => addDirector()}>Add</button>
                <button onClick={() => removeDirector(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DirectorAndMovies;

