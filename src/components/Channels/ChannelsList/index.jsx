import React from 'react';

const ChannelsList = ({ channels }) => (
  <ul className="list-group">
    {channels.map(channel => (
      <li className="list-group-item" key={channel.id}>
        {channel.name}
      </li>
    ))}

  </ul>
);

export default ChannelsList;
