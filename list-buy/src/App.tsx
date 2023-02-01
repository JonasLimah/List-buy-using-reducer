import styles from "./style/listStyle.module.css"
import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { Header } from "./components/header"




export const App = () =>{
    return(
        <div className={styles.main}>
            <Header />
            <Body />
            <Footer />
        </div>
        
    );
}