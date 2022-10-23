import classes from "./Card.module.css"

function Card(props) {
    return <div className={classes.card}>
        {/* for passing the value from MeetupItem */}
        {props.children}
    </div>
}

export default Card;