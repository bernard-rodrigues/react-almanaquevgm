import { CardProps } from '../../types/types'
import './styles.css'


export function DetailsBanner(props: CardProps){
    return(
        <div className="detailsBanner" style={{"backgroundImage": `url(${props.imageUrl})`}}>
            <div className="detailsBannerOverlay">
                <div className="bannerTitle">
                    {props.title}
                </div>
            </div>
        </div>
    )
}