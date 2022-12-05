import './styles.css'

export function Player(){
    return(
        <div id="player">
            <div className="btns">
                <div className="backward iconBackward">
                    <img src="/fast-forward-circle-fill.svg" alt="Backward Button" />
                </div>
                <div className="playPause iconPlay">
                    <img src="/play-circle-fill.svg" alt="Play Button" />
                </div>
                <div className="forward iconForward">
                    <img src="/fast-forward-circle-fill.svg" alt="Forward Button" />
                </div>
            </div>
            <div className="info">
                <div className="currentEpisode"></div>
                <div className="timer"></div>
            </div>
        </div>
    )
}