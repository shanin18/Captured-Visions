import { useEffect } from 'react';
const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} | Captured Vision`
    },[title])
};

export default useTitle;
