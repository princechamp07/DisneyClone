import ImgSlider from "./ImgSlider";

const Home =() => {
    return (
        <main className="min-h-64 p-5 block top-20 overflow-x-hidden relative after:bg-[url('/images/images/home-background.png')] after:absolute after:inset-0 after:opacity-100 after:-z-10">
            <ImgSlider/>
           
        </main>
    );
}

export default Home;