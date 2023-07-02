const Home = () => {

    const style = {
        display: "flex",
        color: "red",
        justifyContent: "center",
        marginTop: "150px",
    };

    return (
        <>
            <h1 style={style}>Home page</h1>
            <div style={{with: '30px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v12a2 2 0 0 1-2 2h-3.618a1 1 0 0 1-.894-.553L12 15.382l-4.447 3.066A1 1 0 0 1 6.618 18H3a2 2 0 0 1-2-2V9zm9-4v6h-2V5H5v10h14V5h-3z"></path>
                </svg>
                </div>
        </>
    )
}

export default Home;