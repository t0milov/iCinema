import React from "react";
import axios from "axios";
import './CrtrPage.css'
// import { sendFile } from "express/lib/response";

export const CrtrPage = () => {

    document.body.style = 'background: #1c1c1c;';

    const [ img, setImg ] = React.useState(null)
    const [, setAvatar] = React.useState(null)

    const sendFile = React.useCallback(async () => {
        try{
            const data = new FormData()
            data.append('fileName', img)

            await axios.post('/api/auth/upload', data, {
                headers: {
                    'content-type' : 'multipart/form-data'
                }
            })

            .then(res => setAvatar(res.data.path))

        }catch(eror){}
        
    }, [img])

    return (

        <div class="row1">
            <form class="col s12">

                <div class="input-field col s12"
                    style={{ width: "40%" }} >
                    <input
                        id="NameCinema"
                        type="text"
                        class="validate"
                        style={{ color: "#FFFFFF" }}
                    />
                    <label for="textarea1">Назввание фильма</label>
                </div>

                <div class="input-field col s12">
                    <textarea
                        id="textarea1"
                        class="materialize-textarea"
                        style={{ color: "#FFFFFF" }}>
                    </textarea>
                    <label for="textarea1">Описание</label>
                </div>

            </form>
            <form action="#">
                <div class="file-field input-field" style={{ width: "40%" }}>
                    <div class="waves-effect waves-light btn" >
                        <span>Превью</span>
                        <input type="file" onChange={e => setImg(e.target.files[0])}/>
                    </div>
                    <div class="file-path-wrapper"  >
                        <input class="file-path validate" type="text" style={{ color: "#FFFFFF" }} />
                    </div>
                </div>
            </form>
            <div>
            <a class="btn-large purple darken-4t" onClick={sendFile()}>СОЗДАТЬ ФИЛЬМ</a>
            </div>

        </div>



    )
}

//    <a class="btn-large purple darken-4t" style={{ position: "absolute", right: "10", top:"5"}}>СОЗДАТЬ ФИЛЬМ</a>
