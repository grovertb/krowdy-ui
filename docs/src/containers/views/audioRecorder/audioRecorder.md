# Audio Recorder


<p class="description">Component to record audio files</p>

{{"demo": "containers/views/audioRecorder/AudioRecorder.js", "hideHeader": false, "bg": true, "bgColor": "gray" }}



| prop                       | type    | description                  |
| -------------------------- |---------| ----------------------------:|
| classNameCanvas               | string   | class to change style from canvas container    |
| spectroActiveColor               | string   | hexadecimal to change style from spectro audio    |
| spectroPassiveColor               | string   | hexadecimal to change style from spectro audio    |
| classes                    | object    |   Modify styles       |
| delete                      | node  | Icon Component (is required) |
| pause                      | node  | Icon Component (is required) |
| play                      | node  | Icon Component (is required) |
| record                      | node  | Icon Component (is required) |
| stop                      | node  | Icon Component (is required) |
| onBlobUrl           | function   |   send blob url      |
| onStatus               | function    |  send status like play / pause / record / stop      |