import styles from "../style/listStyle.module.css"
import { item,action } from "../reduces/list";
import { ChangeEvent, useState } from "react";
import { reduceList } from "../reduces/list";
import { Btn } from "./btn";



export const Body = () => {

    const  [nameItem, setNameItem] = useState(" ")
    const [state,dispatch] = reduceList()
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
       setNameItem(e.target.value);
    }
    const add = () =>{
        if(nameItem){
            dispatch({
                type: "add",
                payload:{
                name: nameItem
                }
            })
            setNameItem("")
        }
    }
    return(
        <div className={styles.body}>
            <div className={styles.Boxinput}>
                <input  maxLength={20} onChange={handleChange} value={nameItem} className={styles.input} placeholder="Digite aqui" type="text" />
              
                <Btn title="Adicionar" onclick={add}/>
                <Btn title="Ordernar" onclick={()=>{
                    dispatch({
                        type: "order"
                    })
                }}/>
         
            </div>
            <div className={styles.boxBody}>
                <ul>
                    {state.map((item,index)=>(
                        <li  className={styles.li}  key={index}>{item.name}
                        <div className={styles.checkbox}>
                            <input className="check" type="checkbox"/>
                            <Btn title="x" onclick={()=>{
                                
                                dispatch({
                                    type: "del",
                                    payload: {
                                        name:item.name,
                                        id: item.id
                            }})}}/>
                        </div>
                        </li> ))}
                </ul>
            </div>
        </div>
    );
}