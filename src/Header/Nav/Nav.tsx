import React from "react";
import Link from "react-scroll/modules/components/Link";
import cssStyle from "./Nav.module.scss"

export const Nav = () => {
    return (
    <nav className={cssStyle.nav}>
        <div className={cssStyle.navItems}>
            <Link
                activeClass={cssStyle.active}
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>Main</Link>
            <Link
                activeClass={cssStyle.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>Skills</Link>
            <Link
                activeClass={cssStyle.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>Projects</Link>
        </div>
    </nav>
  )
}
// export const Nav = () => {
//     return (
//     <nav className={cssStyle.nav}>
//         <ul>
//             <li><Link
//                 activeClass={cssStyle.active}
//                 to="main"
//                 spy={true}
//                 smooth={true}
//                 offset={0}
//                 duration={500}>Main</Link></li>
//             <li><Link
//                 activeClass={cssStyle.active}
//                 to="skills"
//                 spy={true}
//                 smooth={true}
//                 offset={5}
//                 duration={500}>Skills</Link></li>
//             <li><Link
//                 activeClass={cssStyle.active}
//                 to="projects"
//                 spy={true}
//                 smooth={true}
//                 offset={20}
//                 duration={500}>Projects</Link></li>
//         </ul>
//     </nav>
//   )
// }

