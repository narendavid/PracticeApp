import Form from "../components/Form";
import Counter from "../components/Counter"

const Home = () => {

    return (
        <>
            <div className="row">
                <div className="col">
                    <Counter />
                </div>

                <div className="col">
                    <Form />
                </div>
            </div>
        </>

    )
}

export default Home;