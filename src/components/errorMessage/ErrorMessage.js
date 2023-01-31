import img from "./error.gif"

const ErrorMessage = () => {
    return (
        <img style={{display: "flex", width: "250px", height: "250px", objectFit: "contain", margin: "0 auto"}} src={img} alt="error"/>
    )
}

export default ErrorMessage;