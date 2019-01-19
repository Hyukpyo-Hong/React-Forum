import React, { Fragment } from 'react';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import Gravatar from 'react-gravatar';
import ReactPaginate from 'react-paginate';
import Reply from '../../../components/Reply';

export default ({
  thread, replies, handlePageChange, getPageCount,
}) => (
  <Fragment>
    <div className="card mb-3">
      <div className="card-header">
        <Gravatar email={thread.creator.email} size={30} rating="pg" default="robohash" className="mr-3 rounded-circle" />
        <span className="text-sm text-muted">{thread.creator.name}, <b>{distanceInWordsStrict(new Date(), thread.created_at)} ago</b></span>
      </div>
      <div className="card-body">
        <h4 className="text-center">{thread.title}</h4>
        <p className="text-center">{thread.body}</p>
      </div>
      <div className="card-footer text-muted">
        <span>{thread.replies_count} replies</span>
        <a href="" className="btn btn-primary float-right btn-xs">{thread.channel.name}</a>
      </div>
    </div>
    <div className="container">
      {replies.data.map(reply => <Reply key={reply.id} reply={reply} />)}
      <ReactPaginate
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disable"
        breakClassName="page-link"
        onPageChange={handlePageChange}
        pageCount={getPageCount(replies.total, replies.per_page)}
        forcePage={replies.current_page - 1}
      />
    </div>
  </Fragment>
);
