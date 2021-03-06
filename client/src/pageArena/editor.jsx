import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/chrome';

// ===============================================
// CSS Stylying
const aceStyle = {
  margin: '0px'
};
const consoleStyle = {
  height: '150px'
};
const panelStyle = {
  padding: '0px'
};
const iframeStyle = {
  height: '100px',
  width: '300px',
  border: 'none'
};
const noteStyle = {
  fontSize: 12,
  color: '#ff8370',
  marginLeft: 5
}
// ===============================================
// consoleCode using sandboxed i-frame
// reference: https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/
const consoleCode = function (code) {
  var frame = document.getElementById('sandboxed');
  frame.contentWindow.postMessage(code, '*');
};
// ===============================================

class Editor extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>

        {/* ------ AceEditor ------ */}
        <div className="panel panel-default editor" style={aceStyle}>
          <div className="panel-heading">
            Your Solution:
          </div>
          <AceEditor
            mode="javascript"
            theme="chrome"
            name="code"
            width="100%"
            height="300px"
            tabSize={2}
            useSoftTabs={true}
            ref="ace"
            fontSize={16}
            value={this.props.code}
            editorProps={{$blockScrolling: Infinity}}
            onChange={this.props.updateCode}
            onLoad={(editor) => {
              editor.focus();
              editor.getSession().setUseWrapMode(true);
            }}/>
          <div className="panel-footer clearfix ">

            <div className="row">
              <div className="col-md-8 text-left">
                <span className='text-left' style={noteStyle}>
                  Note: For handling unsafe javascript codes, sandboxed iframe is used on the client side and sandboxed docker container is on the server side.
                </span>
              </div>

              <div className="col-md-4 text-right">
                <button
                  className="btn btn-info runbtn"
                  type="button"
                  onClick={() => {
                    var code = this.props.code;
                    consoleCode(code);
                  }}
                >Console</button>
                <button
                  className="btn btn-success successbtn"
                  type="button"
                  onClick={() => {
                    var params = {
                      room: this.props.room.name,
                      problemId: this.props.room.problemId,
                      user: this.props.username,
                      code: this.props.code,
                    }
                    this.props.submitCode(params)}}
                >Submit</button>

              </div>
            </div>
          </div>
        </div>

        {/* ------ Console ------ */}
        {/* note: using sandboxed iframe to evaluate user's JS code */}
        <div className="panel panel-default submissionResultsPanel"
              style={consoleStyle}>
          <div className="panel-heading">
            Console
            <span className='text-left' style={noteStyle}>
              Sandboxed iframe for console logging javascript code
            </span>
          </div>
          <div className="panel-body" style={panelStyle}>
            <iframe sandbox="allow-scripts"
                    id='sandboxed'
                    src="iframeEvalCode.html"
                    style={iframeStyle}></iframe>
          </div>
        </div>

      </div>
    );
  };
};


export default Editor;
