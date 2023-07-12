import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { githubActions } from "../store/gitHub-slice-api/gitHub.slice"

const actions={
    ...githubActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions,dispatch)
}


