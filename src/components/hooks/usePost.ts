import {useSelector} from "react-redux";
import {authSelector} from "../../redux/selectors/auth-selectors";

export function usePost(){
    const accessToken = useSelector(authSelector.accessToken)



    return
}