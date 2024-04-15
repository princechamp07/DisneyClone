import { Link } from "react-router-dom";

const NewDisney = () => {
    return (
        <div className="pb-6">
            <h4>New to Disney</h4>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
               <div className="Card">
                <Link to='/'>
                        <img src="" alt="" />
                    </Link>
               </div>
               <div className="Card">
                <Link to='/'>
                        <img src="" alt="" />
                    </Link>
               </div>
            </div>
        </div>
    );
}

export default NewDisney;