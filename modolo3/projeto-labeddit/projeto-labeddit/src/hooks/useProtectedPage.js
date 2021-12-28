import { useEffect } from 'react'
import { useHistory } from 'react-router';
import { goToLoginPage } from '../routes/coordinator';

export const useProtectedPage = () =>{
  const history = useHistory()

  useEffect(()=>{
    const token = localStorage.getItem('token');

    if(!token) {
      goToLoginPage(history)
    }
  }, [history])
}