import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages, loadSiteStats } from '../../actions';
import Button from '../Button'
import Stats from '../Stats'
import SiteStats from '../SiteStats'

import './styles.css';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {

    componentDidMount() {
        this.props.loadImages()
        this.props.loadSiteStatistics()
    }

    render() {
        const { loading, images, stats, image_stats, error, loadImages } = this.props

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
                            <Stats stats={image_stats} id={image.id} />
                        </div>
                    ))}
                </section>
                <SiteStats loading={loading} {...stats} />
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
