export default function Alert(props:any){

    let type = "";

    if(props.type === "danger"){
        type = "alert-danger";
    }

    if(props.type === "success"){
        type = "alert-success";
    }


    return <div className={`alert ${type}`} role="alert">
        {props.text}
    </div>
}