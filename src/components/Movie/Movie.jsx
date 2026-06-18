import styles from "./Movie.module.css";

function Movie({movie}){
    // const {movie} = props; //digunakan untuk mengirimkan property ke Movies.jsx
   const BACKEND_URL = "http://localhost:3000/uploads/";
   const imageSrc = movie.photo ? `${BACKEND_URL}${movie.photo}`
   : "https://picsum.photos/200/300";
    return(
         <div className={styles.movie}>
                <img className={styles.movie__image}
                    src={imageSrc} 
                    alt={movie.name} />
                    <h3 className={styles.movie__title}>{movie.name}</h3>
                    <p className={styles.movie__date}>{movie.birth_date}</p>
        </div>
    )
}

export default Movie