import React from 'react';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import Gravatar from 'react-gravatar';


export default ({ reply }) => (
  (
    <div className="card mb-3">
      <div className="card-header">
        <Gravatar email={reply.owner.email} size={30} rating="pg" default="robohash" className="mr-3 rounded-circle" />
        <span className="text-sm text-muted">{reply.owner.name}, <b>{distanceInWordsStrict(new Date(), reply.created_at)} ago</b></span>
      </div>
      <div className="card-body">
        <p className="text-center">{reply.body}</p>
      </div>
    </div>
  )
);
