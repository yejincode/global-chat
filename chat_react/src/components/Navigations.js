import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
function Navigations(){
    return(
        <div>
            <div class="navigation">
                <div class="container">
                    <div class="inside">
                        <div class="nav nav-tab menu">
                            <Button variant="btn"><img class="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg" alt="avatar"></img></Button>
                            <a href="#members" data-toggle="tab"><i class="material-icons">account_circle</i></a>
                            <a href="#discussions" data-toggle="tab" class="active"><i class="material-icons">chat_bubble_outline</i></a>
                            <a href="#notifications" data-toggle="tab" class="f-grow1"><i class="material-icons">notifications_none</i></a>
                            <Button variant="btn mode"><i class="material-icons">brightness_2</i></Button>
                            <a href='#settings' data-toggle="tab"><i class="material-icons">settings</i></a>
                            <Button variant="btn power" onclick="visitPage();"><i class="material-icons">power_settings_new</i></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigations;