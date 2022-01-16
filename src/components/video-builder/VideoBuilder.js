import React, { useState } from 'react';
import './VideoBuilder.scss';
import './../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import AnnaImage from '../../assets/people/anna.png';
import YoYoImage from '../../assets/people/yoyo.png';
import SkyeImage from '../../assets/people/skye.png';
import MikeImage from '../../assets/people/mike.png';
import VincentImage from '../../assets/people/vincent.png';
import PeterImage from '../../assets/people/peter.png';
import MayImage from '../../assets/people/may.png';

import { Tab, Accordion, Tabs } from 'react-bootstrap';

const imagePeopleData = [
    {
        id: '1',
        name: 'Anna',
        url: AnnaImage
    }, {
        id: '2',
        name: 'YoYo',
        url: YoYoImage
    }, {
        id: '3',
        name: 'Sky',
        url: SkyeImage
    }, {
        id: '4',
        name: 'Mike',
        url: MikeImage
    }, {
        id: '5',
        name: 'Vincent',
        url: VincentImage
    }, {
        id: '6',
        name: 'Peter',
        url: PeterImage
    }, {
        id: '7',
        name: 'May',
        url: MayImage
    }
];

const peopleVoiceData = ['Asian', 'British', 'American']

const VideoBuilder = () => {
    const [videoInfo, setVideoInfo] = useState({});
    const [title, setTitle] = useState("");
    const [videoTags, setVideoTags] = useState([{name: 'Email', selected: false}, {name: 'Greeting', selected: false}, {name: 'Marketing', selected: false}]);
    const [hidePart1Form, setHidePart1Form] = useState(false);
    const [videoText, setVideoText] = useState('');
    const [showVideoTextToolKit, setShowVideoTextToolKit] = useState(false);
    const [peopleData, setPeopleData] = useState(imagePeopleData);
    const [voiceData, setVoiceData] = useState(peopleVoiceData);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const onTitleSubmit = event => {
        event.preventDefault();
        console.log(videoInfo, 'Current Video State');

        setHidePart1Form(!hidePart1Form);
    };

    const selectTag = tag => {
        const tagIndex = videoTags.findIndex(_tag => _tag.name === tag.name);
        const tempTagHolder = [...videoTags];
        tempTagHolder[tagIndex].selected = !tempTagHolder[tagIndex].selected;
        setVideoTags([...tempTagHolder]);

        videoInfo.title = title; 
        videoInfo.selectedTags = [...tempTagHolder];
        setVideoInfo(videoInfo);
    };

    const onVideoSubmit = event => {
        event.preventDefault();
        console.log('Video Form Submit', event);
    }

    const showToolKit = event => {
        setShowVideoTextToolKit(!showVideoTextToolKit);
    };

    const disbaleToolKit = event => {
        setShowVideoTextToolKit(!showVideoTextToolKit);
    };

    const onPeopleClick = people => {
        setSelectedImage(people.url);
        // Note: Send action here to update people selected in the main state
        // via reducer in Page.js file
        console.log('People clicked', people);
    }

    const onPeopleVoiceClick = voice => {
        setVoiceData(voice);
        console.log('voice clicked', voice);
    }

    const imageStyle = {
        backgroundImage: `url(${selectedImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        <>
            <div className="form-container">
                <div className={hidePart1Form ? `title-form hide`: `title-form`}>
                    <form onSubmit={onTitleSubmit}>
                        <fieldset className="invisible-fieldset">
                            <input className="title-input" name="title" value={title} type="text" placeholder="Enter title for Video Content" onChange={e => setTitle(e.target.value)} />
                        </fieldset>
                        <fieldset className="invisible-fieldset">
                            <p>Select appropriate tags for the video</p>
                            {
                                videoTags.length > 0  && 
                                videoTags.map((tag, index) => (
                                    <span className={tag.selected ? `tag selected` : `tag`} onClick={()=>selectTag(tag)} key={index}>{tag.name}</span>)
                                )
                            }
                        </fieldset>
                        <fieldset className="invisible-fieldset">
                            <button type="submit" className="primary">Save</button>
                        </fieldset>
                    </form>
                </div>
                <div className={!hidePart1Form ? `four-part-form hide`: `four-part-form`}>
                    <div>
                        <form className="video-form" onSubmit={onVideoSubmit}>
                            <div className="video-header">
                                <h1>{videoInfo.title}</h1>
                                <div>
                                    <button type="button" className="light-grey">Cancel</button>
                                    <button type="submit" className="primary">Save</button>
                                </div>
                            </div>
                            <div className="video-content-container">
                                <div className="picture-preview">
                                    <div className="picture-area" style={imageStyle}></div>
                                    <div className="text-area" onMouseEnter={showToolKit} on onMouseLeave={disbaleToolKit}>
                                        <textarea name="videoText" value={videoText} onChange={e => setVideoText(e.target.value)} placeholder="Type or paste your videoscript here. You can also request a translation of 
    an English script to any of 27 other languages"></textarea>
                                        <div className={showVideoTextToolKit ? `show-toolkit`: `hide`}>
                                            <button type="button" className="light-grey margin-left-20">Listen</button>
                        <span className="margin-right-20">chars {videoText.length}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="videos-form">
                                    <Tabs defaultActiveKey="actor" className="mb-3 video-generic-tabs">
                                        <Tab eventKey="actor" title="Actor">
                                            <div className="image-list">
                                                {
                                                    peopleData.length > 0 && peopleData.map(people => {
                                                        return <div key={people.id} className="image-item" onClick={()=>onPeopleClick(people)}>
                                                            <img src={people.url} alt={people.name} />
                                                            <span>{people.name}</span>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </Tab>
                                        <Tab eventKey="voice" title="Voice">
                                            <div className="voice-list">
                                                {
                                                    voiceData.length > 0 && voiceData.map((voice, index) => {
                                                        return <div key={index} className="voice-item" onClick={()=>onPeopleVoiceClick(voice)}>
                                                            <FontAwesomeIcon className="logo" icon={faPlayCircle} />
                                                            <span>{voice}</span>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </Tab>
                                        <Tab eventKey="alignment" title="Alignment">
                                            <div className="alignment">
                                                <button type="button" className="light-grey">Left</button>
                                                <button type="button" className="light-grey">Right</button>
                                                <button type="button" className="light-grey">Center</button>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="background" title="Background">
                                            <div>fnjdsknfksdj</div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoBuilder;