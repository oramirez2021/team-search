import styles from "./pageHeader.module.css";
/*const headerStyles = {
    fontSize: "4em",
    color : "red"
}*/
/*export default function PageHeader(props){
    const {title} = props;
    return (
        <div style = {headerStyles}>
            <h1>
                {title || "Team Search Omar"}
            </h1>
        </div>
    );
}*/
export default function PageHeader(props){
    const {title,subTitle} = props;
    console.log(styles);
    return (
        <div>
            <h1 className = {styles.header} >
                {title || "Team Search Omar"}
            </h1>
            <h2 className = {styles.subtitle}>
                {subTitle || "Team Search subtitle Omar"}
            </h2>
        </div>
    );
}