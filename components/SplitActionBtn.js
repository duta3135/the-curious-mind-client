import React, {useState, useEffect} from 'react'
import styles from '../styles/SplitActionBtn.module.css'
function SplitActionBtn({publish, editorStatus}) {
    const [dropdown, setDropdown] = useState(false)
    const dropdownStyle = dropdown ? styles.dropdownOpen : styles.dropdownClosed
    const changeDropDown = () => {{
        setDropdown(!dropdown)
    }}
    return (
        <div className={styles.wrapper}>
            <button className={styles.mainBtn} onClick={()=>publish(true)}>Post to site</button>
            <button className={styles.btnDown} onClick={()=> changeDropDown()}>
                <svg fill='white' height='15' viewBox='0 0 24 20' width='15' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>
            </button>
            <div className={dropdownStyle} onClick={()=>publish(false)}>Save to drafts</div>
        </div>
    )
}

export default SplitActionBtn
