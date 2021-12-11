import styles from "./Heading.module.css"

type HeadingPropsType = {
  heading: string
  descriptionHeading?: string
}

export const Heading = (props: HeadingPropsType) => {
  return (
    <div className={styles.headingWrapper}>
      <h2 className={styles.heading}>{props.heading}</h2>
        <div className={styles.line}><span></span></div>
        <span className={styles.ghostSpan}>{props.heading}</span>
    </div>
  )
}