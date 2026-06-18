
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Navbar(){
    const {token, logout} = useContext(AuthContext);
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
            <div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        {/* //Link jika didalam html kegunaanya persis dengan a href */}
                       <Link to='/'> Home </Link>
                        </li>
                        {/* jika dia belum masuk maka list student tidak muncul */}
                    {token && 
                    <li className={styles.navbar__item}>
                       <Link to='/student'> List Student</Link>
                    </li> }
                    {token ? (
                    <li className={styles.navbar__item}>
                       <button onClick={logout}>Logout</button>
                       </li>
                        ): (
                        <li className={styles.navbar__item}>
                    <Link to='/login'>Login </Link>
                        </li>
                        )}
                    <li className={styles.navbar__item}>
                       <Link to='/class'> Class</Link>
                       </li>
                   
                  
                    
                </ul>
            </div>
            </nav>
        </div>
    )
}
export default Navbar;