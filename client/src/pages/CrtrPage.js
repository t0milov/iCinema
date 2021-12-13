import React from "react";
import './CrtrPage.css'

export const CrtrPage = () => {

    document.body.style = 'background: #1c1c1c;';

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
                        <input type="file" />
                    </div>
                    <div class="file-path-wrapper"  >
                        <input class="file-path validate" type="text" style={{ color: "#FFFFFF" }} />
                    </div>
                </div>
            </form>
            <div>
            <a class="btn-large purple darken-4t" >СОЗДАТЬ ФИЛЬМ</a>
            </div>

        </div>



    )
}

//    <a class="btn-large purple darken-4t" style={{ position: "absolute", right: "10", top:"5"}}>СОЗДАТЬ ФИЛЬМ</a>
