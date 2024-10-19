import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css'
import logo from '../assets/img/Kodigo_Music.png'

interface FormData {
    username: string;
    password: string;
    email: string;
  }

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    // Función que se ejecuta cuando el formulario es válido
    const onSubmit = (data: FormData) => {
        alert('Cuenta creada');
        console.log(data);
        
        // Redirigir a la página principal (HomePage) cuando todo es correcto
        navigate('/')
    };

    return (
        <>
            <div className={styles.welcome}>
                    <h1>Bienvenidos</h1>
            </div>
            
            <div className={styles.loginContainer}>

                <section className={styles.headerLogo}>
                    <img src={logo} alt="Logo KodigoMusic" />
                    <h2>Kodigo Music</h2>
                </section>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Nombre de usuario */}
                    <div className={styles.formGroup}>
                        <label>Username</label>
                        <input
                            type="text"
                            {...register('username', {
                                required: 'Username is required',
                                validate: (value) => !/\s/.test(value) || 'Username cannot contain spaces',
                            })}
                        />
                        {errors.username && <p className={styles.errorMessage}>{errors.username.message}</p>}
                    </div>

                    {/* Correo electrónico */}
                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                    message: 'Email must be a valid @gmail.com address',
                                },
                            })}
                        />
                        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
                    </div>

                    {/* Contraseña */}
                    <div className={styles.formGroup}>
                        <label >Password</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                            })}
                        />
                        {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
                    </div>

                    <div className={styles.btn}>
                        <button type="submit">Create</button>

                    </div>
                </form>
            </div>

        </>
    );
};

export default LoginForm;
