import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages, loadStats } from '../../actions';
import Button from '../Button'

import './styles.css';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {

    componentDidMount() {
        this.props.loadImages()
        this.props.loadStatistics()
    }

    render() {
        const { loading, images, stats, error, loadImages } = this.props
        const { 
            downloads, 
            views, 
            new_photos, 
            new_photographers, 
            new_developers, 
            new_applications 
        } = stats;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {!loading && !error && <div>
                    <h3>UnSplash Stats</h3>
                    <p>Downloads: {downloads}</p>
                    <p>Views: {views}</p>
                    <p>New Photos: {new_photos}</p>
                    <p>New Photographers: {new_photographers}</p>
                    <p>New Developers: {new_developers}</p>
                    <p>New Applications: {new_applications}</p>
                </div>}
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button 
                    loading={loading} 
                    onClick={() => !loading && loadImages()}
                >Load Images</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ loading, images, stats, error }) => ({
    loading,
    images,
    error,
    stats
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
    loadStatistics: () => dispatch(loadStats())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);
