import './AuthPage.css';

import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    document.body.style = 'background: #1c1c1c;';

    return (
        <div id="container">
            <div id="row" className="row">
                <div className="col s6 offset-l3">
                    <center>
                        <h4 style={{ color: "#FFFFFF" }}>Онлайн кинотеатр</h4>
                        <h2 style={{ color: "#FFFFFF" }}>iCinema</h2>
                    </center>
                    <div className="card grey darken-3">
                        <div className="card-content white-text">
                            <span className="card-title">Авторизация</span>

                            <div>
                                <div className="input-field">
                                    <input  
                                        placeholder="Введите email"
                                        id="email"
                                        type="text"
                                        name="email"
                                        className="yellow-input"
                                        value={form.email}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="first_name">Email</label>
                                </div>

                                <div className="input-field">
                                    <input
                                        placeholder="Введите пароль"
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="yellow-input"
                                        value={form.password}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="first_name">Пароль</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">

                            <button
                                className="btn purple darken-3"
                                style={{ marginRight: 10 }}
                                disabled={loading}
                                onClick={loginHandler}
                            >
                                Войти
                            </button>

                            <button
                                className="btn purple darken-4t"
                                onClick={registerHandler}
                                disabled={loading}
                            > Регистрация
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
