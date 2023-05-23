import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `ToySmash | ${title}` ;
    },[title])
}

export default useTitle;