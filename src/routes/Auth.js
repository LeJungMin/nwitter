import React, { useState } from 'react';
import { authService } from "../fbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthForm from "components/AuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
    const [error, setError] = useState('');
    
    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        let provider;
        
        try {
            setError(''); // 에러 초기화
            
            if (name === 'google') {
                provider = new GoogleAuthProvider();
            } else if (name === 'github') {
                provider = new GithubAuthProvider();
            }
            
            console.log(`Attempting ${name} login...`);
            const result = await signInWithPopup(authService, provider);
            console.log('Social login successful:', result.user);
            
        } catch (error) {
            console.error('Social login error:', error);
            
            // 에러 메시지를 사용자 친화적으로 변환
            let errorMessage = error.message;
            if (error.code === 'auth/unauthorized-domain') {
                errorMessage = '현재 도메인에서 소셜 로그인이 허용되지 않습니다. 관리자에게 문의하세요.';
            } else if (error.code === 'auth/popup-closed-by-user') {
                errorMessage = '로그인이 취소되었습니다.';
            } else if (error.code === 'auth/popup-blocked') {
                errorMessage = '팝업이 차단되었습니다. 브라우저 설정을 확인해주세요.';
            }
            
            setError(errorMessage);
        }
    }
    
    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faTwitter}
                color={"#04AAFF"}
                size="3x"
                style={{ marginBottom: 30 }}
            />
            <AuthForm />
            {error && <div className="authError" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">
                Continue with Google <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button onClick={onSocialClick} name="github" className="authBtn">
                Continue with Github <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    );
}
export default Auth;