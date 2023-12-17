import { useContext } from "react";
import AvtarImg from "../../../assets/images/placeholder.jpg"
import { AuthContext } from "../../../providers/AuthProvider";
const Avtar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {user ? user.photoURL : <img className="rounded-full" height="30" width="30" src={AvtarImg} alt="" />}
        </div>
    );
};

export default Avtar;