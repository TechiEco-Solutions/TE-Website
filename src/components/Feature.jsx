import { HiOutlineChevronRight } from "react-icons/hi";

export default function Feature(props){
    return (
        <section className="pointer--container">
            {props.icon}
            <div className="point--content">
            <h3 className="point--heading">{props.heading}</h3>
            <p className="point--pointer">{props.point}</p>
            </div>
            <HiOutlineChevronRight fontSize="3rem"/>
        </section>
    )
}
