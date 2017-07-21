import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';

class MediaGalleryPage extends Component {

  // Dispatches *searchMediaAction*  immediately after initial rendering.
  // Note that we are using the dispatch method from the store to execute this task, courtesy of react-redux
  componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  render() {
    console.log(this.props.images, 'Images');
    console.log(this.props.videos, 'Videos');
    console.log(this.props.selecteImage, 'SelectedImage');
    console.log(this.props.selectedVideo, 'SelectedVideo');
    return (
      <div></div>
    )
  }

}

MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);
