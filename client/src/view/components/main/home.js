import React, { Component } from 'react'
import { Wrapper } from "../../containers/wrapper";
import $ from 'jquery';



class Home extends Component {

    constructor(props) {

        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            resolutions: [
                "Unchanged", "240p", "480p", "720p", "1080p", "2K", "4K"
            ],
            compressions: [
                "Unchanged", "Low", "Medium", "High"
            ],
            formats: [
                "MP4", "AVI", "MKV"
            ]
        }


    }

    handleClick() {
        let filename = $('input[type=file]').val().split('\\').pop();
        $('#file-name').html(filename);
    }

    render() {

        let html = [];

        html.resolutions = this.state.resolutions.map((item, key) =>
            <option value={item}>{item}</option>
        );

        html.compressions = this.state.compressions.map((item, key) =>
            <option value={item}>{item}</option>
        );

        html.formats = this.state.formats.map((item, key) =>
            <option value={item}>{item}</option>
        );



        return (
            <Wrapper>
                <div className="content-inner">
                    <div className="transcoder">
                        <h1>Input</h1>
                        <div className="file-input-container">
                            <h2>File</h2>
                            <div className="file-input">
                                <input type="file" id="file-upload" onChange={() => this.handleClick()} />
                                <span className="label" id="file-name">No file selected</span>
                                <button className="button button-blue">Choose</button>
                            </div>
                        </div>
                        <h1>Output</h1>
                        <div className="file-setting-container">
                            <h2>Resolution</h2>
                            <div className="file-setting">
                                <select name="resolution" id="resolution">
                                    {html.resolutions}
                                </select>
                            </div>
                        </div>
                        <div className="file-setting-container">
                            <h2>Quality</h2>
                            <div className="file-setting">
                                <select name="compression" id="compression">
                                    {html.compressions}
                                </select>
                            </div>
                        </div>
                        <div className="file-setting-container">
                            <h2>Format</h2>
                            <div className="file-setting">
                                <select name="format" id="format">
                                    {html.formats}
                                </select>
                            </div>
                        </div>
                        <div className="file-setting-container">
                            <h2>Filename</h2>
                            <div className="file-setting">
                                <input type="text" name="filename" id="filename" />
                            </div>
                        </div>
                        <div className="file-save">
                            <button className="button button-blue">Transcode</button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }

}

export default Home