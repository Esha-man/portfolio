import style from "./Heading.module.css"

type HeadingPropsType = {
  heading: string
  descriptionHeading?: string
}

export const Heading = (props: HeadingPropsType) => {
  return (
    <>
      <h2 className={style.heading}>{props.heading}</h2>
      <h4>{props.descriptionHeading}</h4>
    </>
  )
}