import React from "react";
import Button from "react-bootstrap/esm/Button";

function ModalAddFriends(){
    return(
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="requests">
                    <div className="title">
                        <h1>Add your friends</h1>
                        <Button variant="btn" data-dismiss="modal" aria-label="Close"><i className="material-icons">close</i></Button>
                    </div>
                    <div className="content">
                        <form>
                            <div className="form-group">
                                <label for="user">Username:</label>
                                <input type="text" className="form-control" id="user" placeholder="Add recipient..." required/>
                                <div className="user" id="contact">
                                    <img className="avatar-sm" src="dist/img/avatars/avatar-female-5.jpg" alt="avatar"/>
                                    <h5>Keith Morris</h5>
                                    <Button variant="btn"><i className="material-icons">close</i></Button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="welcome">Message:</label>
                                <textarea className="text-control" id="welcome" placeholder="Send your welcome message...">Hi Keith, I'd like to add you as a contact.</textarea>
                            </div>
                            <Button type="submit" variant="btn button w-100">Send Friend Request</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAddFriends;