import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages, loadSiteStats } from '../../actions';
import Button from '../Button'

import './styles.css';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {

    componentDidMount() {
        this.props.loadImages()
        this.props.loadSiteStatistics()
    }

    render() {
        const { loading, images, stats, image_stats, error, loadImages } = this.props
        const { 
            downloads, 
            views, 
            new_photos, 
            new_photographers, 
            new_developers, 
            new_applications 
        } = stats;

        console.log('IMAGE STATS: ', image_stats)
        console.log("IMAGES: ", images)

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
                            {image_stats[image.id] && 
                                <div>
                                    <span>Downloads: {image_stats[image.id].payload.downloads}&nbsp;&nbsp;&nbsp;</span>
                                    <span>Views: {image_stats[image.id].payload.views}&nbsp;&nbsp;&nbsp;</span>
                                    <span>Likes: {image_stats[image.id].payload.likes}&nbsp;&nbsp;&nbsp;</span>
                                </div>
                            }
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

const mapStateToProps = ({ loading, images, stats, image_stats, error }) => ({
    loading,
    images,
    error,
    stats,
    image_stats
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
    loadSiteStatistics: () => dispatch(loadSiteStats())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);
