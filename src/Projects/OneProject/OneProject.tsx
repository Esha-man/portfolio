import cssStyles from "./OneProject.module.scss"
import eye from "../../assets/images/eye.svg"


type OneProjectPropsType = {
    style: any
    title: string
    description: string
    ghPages: string
    ghCode: string
}


export const OneProject = (props: OneProjectPropsType) => {

    return (

        <div className={cssStyles.oneProject}>

            <a href={props.ghPages} target="_blank">
                <div className={cssStyles.icon}
                    style={props.style}>
                    {/* <div className={cssStyles.watchWrapper}>
                        <img src={eye} alt="watch demo" />
                    </div> */}
                </div>
            </a>
            <h3 className={cssStyles.projectTitle}>{props.title}</h3>
            <span className={cssStyles.description}>{props.description}</span>

            <div>
                <a href={props.ghCode} className={cssStyles.watchCode} target="_blank">
                   - Watch code on Github -
                </a>
            </div>
        </div>
    )
}