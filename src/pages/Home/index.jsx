import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeThreads from './HomeThreads';
import { getThreads } from '../../store/actions/threads';
import loadingGif from '../../loading.gif';

class HomeContainer extends Component {
  constructor() {
    super();
  }

  componentWillMount = () => {
    this.props.getThreads();
  }

  handlePageChange = (page) => {
    this.props.getThreads(page.selected + 1);
  }

  getPageCount=(total, perPage) => {
    Math.ceil(total / perPage);
  }

  render() {
    if (!this.props.loading) {
      return (
        <HomeThreads
          threads={this.props.threadsData.data}
          handlePageChange={this.handlePageChange}
          pageCount={this.getPageCount(this.props.threadsData.total, this.props.threadsData.per_page)}
          currentPage={this.props.threadsData.current_page - 1}
        />);
    }
    return (
      <div className="text-center">
        <img src={loadingGif} alt="" className="img" width="80px" height="80px" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  threadsData: state.threads,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getThreads: (page) => {
    dispatch(getThreads(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
