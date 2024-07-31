import React from 'react';

const Row = ({ song }) => {
  return (
    <tr>
      <td>{song.number}</td>
      <td>{song.name}</td>
    </tr>
  );
};

export default Row;