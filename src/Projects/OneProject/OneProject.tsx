import cssStyles from "./OneProject.module.scss"


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

            <a href={props.ghPages}
             target="_blank" 
            rel="noreferrer">
                <div className={cssStyles.icon}
                    style={props.style}
                    data-title="watch project">
                </div>
            </a>
            <h3 className={cssStyles.projectTitle}>{props.title}</h3>
            <span className={cssStyles.description}>{props.description}</span>

            <div>
                <a href={props.ghCode} className={cssStyles.watchCode} 
                target="_blank"
                rel="noreferrer">
                   - Watch code on Github -
                </a>
            </div>
        </div>
    )
}