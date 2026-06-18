import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constant/data";
import { useEffect, useState } from "react";
import { getStudent } from "../../utils/constant/studentApi";

function Movies(){
    // const movies = data;
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchStudents();
    }, []);
    async function fetchStudents(){
        try{
            setLoading(true);
            setError(null);
            const response = await getStudent();
            setStudents(response.data.data);
        } catch(err){
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    if (loading) return <p>Memuat Data...</p>;
    if (error) return <p>Error : {error}</p>
    // const [movies, setMovies] = useState(data);
    //ketika handleClick diproses, data akan disimpan di State
    // function handleClick(){
    //     const movie = {
    //         id: "xyz", title: "Jigsaw",
    //         year: 2021, type: "Movie",
    //         poster: "https://picsum.photos/200/300"
    //     };
    //     // movies.push(movie);
    //     //melakukan update dengan spread Operator
    //     setMovies([...movies, movie]);
    // }
    return(
        <div className={styles.container}>
            <section>
                <h2>
                    Daftar Siswa 
                </h2>
                <div className={styles.movie__container}>
            {/* looping data */}
                 {students.map((student)=>{
                    return <Movie key={student.id} movie={student} />
                 })}
                </div>  
            </section>
        </div>
    )
}
export default Movies