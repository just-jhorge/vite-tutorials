import Header from "./header/Header";
import Hero from "./heroSection/Hero";

const App = () => {
    return (
        <div className="relative lg:w-11/12 xl:w-10/12 mx-auto">
            <Header />
            <Hero />
            <footer className="text-center text-sm font-bold py-5 mb-3">
                <p className="mb-1">
                    Coded by{" "}
                    <a href="/" className="underline text-orange-500">
                        George
                    </a>
                    .
                </p>
            </footer>
        </div>
    );
};

export default App;
