
export default function Input({label, textarea, ...props}){
    return(
        <section>
            <label>{label}</label>
            {textarea ? <textarea {...props}/> : <input {...props} />} 
        </section>
       
    )
}