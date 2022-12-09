import React from "react";
import { useState } from "react";
import Navigations from "../components/Navigations";

import SideBar from "../components/SideBar";
import Main from "../components/Main";
import ModalNewChat from "../components/ModalNewChat";
import ModalAddFriends from "../components/ModalAddFriends";
function MainPage(){
    return(
        <div>
            <main>
            <div class="layout">
				<Navigations/>
				<SideBar/>
				<ModalAddFriends/>
				<ModalNewChat/>
				<Main/>
			</div>
            </main>
        </div>
    );
}

export default MainPage;