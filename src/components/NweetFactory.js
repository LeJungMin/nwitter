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
        
        // userObj가 없으면 트윗 작성을 막습니다
        if (!userObj || !userObj.uid) {
            console.error("User not logged in");
            return;
        }
        
        try {
            let attachmentUrl = "";
            
            if (attachment !== "") {
                console.log("📸 이미지 업로드 시작...");
                console.log("이미지 크기:", attachment.length, "바이트");
                
                const attachmentRef = ref(storageService, `${userObj.uid}/${v4()}`);
                console.log("Storage 경로:", attachmentRef.fullPath);
                
                const response = await uploadString(attachmentRef, attachment, "data_url");
                console.log("✅ 업로드 성공!", response);
                
                attachmentUrl = await getDownloadURL(response.ref);
                console.log("✅ 다운로드 URL 획득:", attachmentUrl);
            }
            
            const nweetObj = {
                text: nweet,
                createdAt: Date.now(),
                creatorId: userObj.uid,
                attachmentUrl
            }
            
            console.log("📝 Firestore에 저장할 객체:", nweetObj);
            
            const docRef = await addDoc(collection(dbService, 'nweets'), nweetObj);
            console.log("✅ Firestore 저장 성공! 문서 ID:", docRef.id);
            
            // 성공적으로 저장된 후에만 폼 초기화
            setNweet('');
            setAttachment('');
            
        } catch (error) {
            console.error("❌ 트윗 작성 중 오류 발생:", error);
            console.error("오류 코드:", error.code);
            console.error("오류 메시지:", error.message);
            
            // 사용자에게 에러 알림
            alert(`트윗 작성에 실패했습니다: ${error.message}`);
        }
    };

    const onChange = (event) => {
        const { target: { value } } = event;
        setNweet(value)
    };
    const onFileChange = (event) => {
        const { target: { files } } = event;
        const theFile = files[0];
        
        if (!theFile) {
            console.log("파일이 선택되지 않았습니다.");
            return;
        }
        
        console.log("📁 선택된 파일:", {
            name: theFile.name,
            size: theFile.size,
            type: theFile.type
        });
        
        // 파일 크기 체크 (5MB 제한)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (theFile.size > maxSize) {
            alert('파일 크기가 너무 큽니다. 5MB 이하의 이미지를 선택해주세요.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (finishedEvent) => {
            const { currentTarget: { result } } = finishedEvent;
            console.log("📸 이미지 미리보기 생성 완료");
            setAttachment(result);
        }
        reader.onerror = (error) => {
            console.error("파일 읽기 오류:", error);
            alert('파일을 읽는데 실패했습니다.');
        }
        reader.readAsDataURL(theFile);
    };
    const onClearattachment = () => {
        console.log("🗑️ 첨부 이미지 제거");
        setAttachment("");
    }

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
            alt="attachment preview"
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #04AAFF'
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