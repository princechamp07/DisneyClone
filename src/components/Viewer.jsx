import './custom.css'

function Viewer() {
    return (
        <div className="mt-8 pt-8 pb-6 grid gap-6 md:grid-cols-5 ">
           <div className="viewer">
            <img src="./images/images/viewers-disney.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/videos/1564674844-disney.mp4' type='video/mp4' />
            </video>
           </div>
           <div className="viewer">
            <img src="./images/images/viewers-marvel.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/videos/1564676115-marvel.mp4' type='video/mp4' />
            </video>
           </div>
           <div className="viewer">
            <img src="./images/images/viewers-national.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/videos/1564676296-national-geographic.mp4' type='video/mp4' />
            </video>
           </div>
           <div className="viewer">
            <img src="./images/images/viewers-pixar.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/videos/1564676714-pixar.mp4' type='video/mp4' />
            </video>
           </div>
           <div className="viewer">
            <img src="./images/images/viewers-starwars.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/videos/1608229455-star-wars.mp4' type='video/mp4' />
            </video>
           </div>
        </div>
    );
}

export default Viewer;