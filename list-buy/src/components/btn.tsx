import styles from "../style/listStyle.module.css"
type Btn ={
    title: string,
    onclick: ()=> void
}

export const Btn =({title,onclick}:Btn)=>{
    return(
        <button className={styles.Btn} onClick={onclick}>{title}</button>
    );
}