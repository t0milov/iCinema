import React from "react";
import './CrtrPage.css'

export const CrtrPage = () => {

    document.body.style = 'background: #1c1c1c;';

    return (

        <div class="row1">
            <form class="col s12">

                <div class="input-field col s12"
                    style={{ width: 400 }} >
                    <input
                        id="first_name2"
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
                <div class="file-field input-field" style={{ width: 400 }}>
                    <div class="waves-effect waves-light btn" style={{ width: 100 }} >
                        <span>Превью</span>
                        <input type="file" />
                    </div>
                    <div class="file-path-wrapper" style={{ width: 300 }} >
                        <input class="file-path validate" type="text" style={{ color: "#FFFFFF" }} />
                    </div>
                </div>
            </form>

            <a class="btn-large purple darken-4t">СОЗДАТЬ ФИЛЬМ</a>


        </div>



    )
}
