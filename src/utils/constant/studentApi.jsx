import http from "./http";

export function getStudent(){
    return http.get("/students");
}
export function createStudent(formData){
    return http.post("/students", formData, {
        headers: {"Content-Type": "multipart/form-data"},
    });
}