import React, {useState} from 'react';
import {getDownloadURL, ref, uploadString} from "firebase/storage";
import {dbService, storageService} from "../fbase";
import {v4} from "uuid";
import {addDoc, collection} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
const NweetFactory = ({userObj}) => {
    const [nweet, setNweet] = useState('');
    const [attachment, setAttachment] = useState("");

    const onSubmit = async (event) => {
        if (nweet === "") {
            return;
          }
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = ref(storageService, `${userObj.uid}/${v4()}`);
            const response = await uploadString(attachmentRef, attachment, "data_url");
            attachmentUrl = await getDownloadURL(response.ref);
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        }
        addDoc(collection(dbService, 'nweets'), nweetObj)
        setNweet('');
        setAttachment('');
    };

    const onChange = (event) => {
        const { target: { value } } = event;
        setNweet(value)
    };
    const onFileChange = (event) => {
        const { target: { files } } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onload = (finishedEvent) => {
            const { currentTarget: { result } } = finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile)
    };
    const onClearattachment = () => setAttachment("")

    return (
        <form onSubmit={onSubmit} className="factoryForm">
        <div className="factoryInput__container">
        <input
            className="factoryInput__input"
            value={nweet}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
        </div>
        <label htmlFor="attach-file" className="factoryInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
        </label>
        <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
            opacity: 0,
        }}
        />
        {attachment && (
        <div className="factoryForm__attachment">
            <img
            src={attachment}
            style={{
                backgroundImage: attachment,
            }}
            />
            <div className="factoryForm__clear" onClick={onClearattachment}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
        )}
        </form>

    );
};

export default NweetFactory;