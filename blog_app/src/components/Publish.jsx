
function Publish() {
    return(
        <div>
            <h1>Publish</h1>
            <form action="/upload-endpoint" method="POST" encType="multipart/form-data">
                <label htmlFor="myFile">Select a file:</label>
                <input type="file" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Publish