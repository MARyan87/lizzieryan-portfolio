import React from 'react';
import {Link} from 'react-router-dom';
import MainFont from '../Primitives/MainFont';
import './Composed.css';

class StudyTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='study-template'>
                <div className={this.props.img.indexOf('Zeit') === -1 ? 'work-img crop' : 'work-img'}>
                    <img src={this.props.img} />
                </div>
                <div className='recent-work'>
                    {this.props.showRecentWork &&
                        <div className='recent-work-title'>
                            <MainFont options={{size:'lg', bold: true}} text="Recent Work"/>
                        </div>
                    }
                    {this.props.showBackTop &&
                      <div className='back-to-top'>
                        <a href='#'>
                          <MainFont options={{size:'sm', bold: true, color: 'teal'}} text={'Back to Top ^'}/>
                        </a>
                      </div>
                    }
                    <div className={!this.props.showRecentWork ? 'not-first work-item-title' : 'work-item-title'}>
                        <MainFont options={{size:'md', bold: true, color: 'grey'}} text={this.props.title1}/>
                        <MainFont options={{size:'md', bold: true, color: 'grey'}} text={this.props.title2}/>
                    </div>
                    <div className='work-description'>
                        <MainFont options={{size:'tiny', color: 'grey'}} text={this.props.description} />
                    </div>
                    <div className='read-study'>
                        <Link to={`/CaseStudy/${this.props.study}`}>
                            <MainFont options={{size:'sm', bold: true, color: 'teal'}} text={this.props.next ? "Next Case Study >" : "Read Case Study >"}/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyTemplate;