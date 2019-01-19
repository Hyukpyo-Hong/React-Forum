import React from 'react';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';

const Thread = ({ thread }) => (
  (
    <div className="card mb-3">
      <div className="card-header">
        <Gravatar email={thread.creator.email} size={30} rating="pg" default="robohash" className="mr-3 rounded-circle" />
        <span className="text-sm text-muted">{thread.creator.name}, <b>{distanceInWordsStrict(new Date(), thread.created_at)} ago</b></span>
        <Link to={`/thread/${thread.id}`} className="btn btn-info btn-xs float-right">view thread</Link>
      </div>
      <div className="card-body">
        <h4 className="text-center">{thread.title}</h4>
      </div>
      <div className="card-footer text-muted">
        <span>{thread.replies_count} replies</span>
        <a href="" className="btn btn-primary float-right btn-xs">{thread.channel.name}</a>
      </div>
    </div>
  )

);


export default Thread;
