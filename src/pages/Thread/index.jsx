import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SingleThread from './SingleThread';
import { getThread } from '../../store/actions/threads';
import { getReplies } from '../../store/actions/replies';
import Loader from '../../components/Loader';


class ThreadContainer extends Component {
  componentWillMount = () => {
    const id = this.props.match.params.id;
    this.props.getThread(id);
    this.props.getReplies(id);
  }

  handlePageChange=(page) => {
    const { id } = this.props.match.params;
    this.props.getReplies(id, page.selected + 1);
  }

  getPageCount=(total, perPage) => {
    Math.ceil(total / perPage);
  }


  render() {
    return (
      <Fragment>
        {
          !this.props.loading
          && (
          <SingleThread
            thread={this.props.thread}
            replies={this.props.replies}
            handlePageChange={this.handlePageChange}
            getPageCount={this.getPageCount}
          />
          )
        }{
          this.props.loading
          && <Loader />
        }
      </Fragment>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  getThread: (id) => {
    dispatch(getThread(id));
  },
  getReplies: (id, page) => {
    dispatch(getReplies(id, page));
  },
});

const mapStateToProps = state => ({
  thread: state.thread.data,
  loading: state.thread.loading,
  loadingReplies: state.thread.loadingReplies,
  replies: state.thread.replies,
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);
