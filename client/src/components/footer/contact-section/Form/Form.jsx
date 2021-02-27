import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import axios from "axios";
import './form.css'
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maXWidth: 300,
        backgroundColor: "#515151",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
            color: "#fff"
        },
    },
    input: {
        maXWidth: 300,
        height: 40,
        borderRadius: 10,
        padding: 10
    },
    alert: {
        top: 10,
        position: "fixed",
        left: '5%',
        width: '90%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Form() {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        }, [name, phone]
    );

    async function f(e) {
        e.preventDefault();
        try {
            const token = '1542555512:AAGinPQYiW8irTk6zbhb1zYvdgS2bxFzd_Y'
            const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=-538941601&text=Имя:${name}_Телефон:${phone}`.split(' ').join('')
            await axios.get(url)
                .then((response) => {
                    setOpenAlert(true)
                    setTimeout(() => {
                        setName('')
                        setPhone('')
                        setOpenAlert(false)
                    }, 3000)
                });
        } catch (e) {
            alert(e)
        }

    }


    return (
        <>
            {
                !openAlert ?
                    null : <Alert
                        className={classes.alert}
                        variant="filled"
                        severity="success">
                        {name.toUpperCase()}, дякуємо, що ви з
                        нами! Ми Вам залефонуємо!
                    </Alert>
            }

            <form className={classes.root}
                  autoComplete="off" onSubmit={(e) => f(e)}>
                <h2 className="form-h2  wow__wobble">Ми Вам
                    зателефонуємо!</h2>

                <Input
                    className={classes.input}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name={'name'}
                    value={name}
                    placeholder="Введите Ім'я..."
                />
                <Input
                    className={classes.input}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    name={'phone'}
                    value={phone}
                    placeholder="Введіть телефон..."
                />
                <Button style={{width: "100%"}}
                        type='submit'>Отправить</Button>
            </form>

        </>
    )
        ;
}
