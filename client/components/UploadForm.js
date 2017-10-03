import React from "react";

export default class UploadForm extends React.Component {

Render () {
        return ( 
        <form class= "form-inline" 
ref='uploadForm' 
id='uploadForm' 
action='./upload' 
method='post' 
encType="multipart/form-data">
    <input class="form-control formBorder" type="file" name="image" required />
    <input class="form-control" type="text" name="artist" id="artistBox" placeholder="artist (if known)"/>
    <input class="form-control" type="text" name="title" id="titleBox" placeholder="title (if known)" required/>
    <input class="form-control" type="text" name="description" id="descriptionBox" placeholder="Description" required/>
    <input class="form-control" type="text" name="address" id="addressBox" placeholder="address" required />
    <input class="form-control" id="submitBox" type='submit' value='Upload!' />
</form>
);
}
}

