import { episodeData } from '../../types/types'
import './styles.scss'


export function DetailsBanner(props: episodeData){
    return(
        <div className="detailsBanner" style={{"backgroundImage": `url(${props.img})`}}>
            <div className="detailsBannerOverlay">
                <div className="bannerTitle"></div>
            </div>
        </div>
    )
}