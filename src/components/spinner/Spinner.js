const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: "0 auto", background: "none", display: "block"}} version="1.0" width="64px" height="64px" viewBox="0 0 128 128">
            <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
            <g>
                <path d="M26.43 44.95a45.68 45.68 0 0 0 18.6 36.82h-.3a36.83 36.83 0 1 1 0-73.65h.3a45.68 45.68 0 0 0-18.6 36.83zm44-22.55a45.68 45.68 0 0 0-29.28 29.07l-.1-.28a36.83 36.83 0 0 1 70.05-22.8l.1.3a45.68 45.68 0 0 0-40.77-6.32zm35.27 34.9A45.68 45.68 0 0 0 69 38.45c.1-.06.17-.13.25-.2a36.83 36.83 0 1 1 43.3 59.6c-.08.07-.17.12-.25.18a45.68 45.68 0 0 0-6.6-40.73zm-22.57 44.3a45.68 45.68 0 0 0 6.6-40.72c.08.05.16.1.24.17a36.83 36.83 0 0 1-43.3 59.6l-.24-.2a45.68 45.68 0 0 0 36.7-18.85zm-48.8-7.86a45.68 45.68 0 0 0 40.77-6.3l-.1.28A36.83 36.83 0 1 1 4.96 64.95l.1-.28a45.68 45.68 0 0 0 29.28 29.07z" fill="#000000"/>
                <animateTransform attributeName="transform" type="rotate" from="72 64 64" to="0 64 64" dur="360ms" repeatCount="indefinite">
                </animateTransform>
            </g>
        </svg>
    )
}

export default Spinner