import axios from 'axios'
import styles from '../styles/Login.module.scss'
import { useAppContext } from '../contexts/AppContext';
import { useRouter } from 'next/router';

export default function Login() {
  const { setAuthState } = useAppContext();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const data = await axios.post('http://challenge-react.alkemy.org', {
      email,
      password,
    })
      .then((response) => response.data)
      .catch(console.error);

    if (data && data.token) {
      // Guardamos el token en localStorage
      window.localStorage.setItem('token', data.token);
      setAuthState(true);
      console.log('Autenticado correctamente.');
      router.push('/')
    } else {
      console.log(`No se pudo obtener el token`);
    }
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
          <div className={styles.formField}>
            <input type="email" name="email" placeholder="Ingresa tu email" />
          </div>
          <div className={styles.formField}>
            <input type="password" name="password" placeholder="Ingresa tu password" />
          </div>
          <button type="submit" className={styles.submit}>Enviar</button>
        </form>
      </div>
    </div>
  )
}