# 🐦 Nwitter

React와 Firebase로 구축한 현대적인 트위터 클론 프로젝트입니다.

## 🌟 주요 기능

- **사용자 인증**: 이메일/비밀번호로 회원가입 및 로그인
- **실시간 트윗**: 트윗 작성, 조회, 삭제 기능
- **이미지 업로드**: 트윗에 사진 첨부 가능
- **사용자 프로필**: 개인화된 프로필 페이지
- **반응형 디자인**: 데스크톱과 모바일에서 완벽하게 작동
- **실시간 업데이트**: 새로고침 없이 새 트윗 확인

## 🚀 라이브 데모

배포된 웹사이트: [https://nwitter-mu.vercel.app/](https://nwitter-mu.vercel.app/)

## 🛠️ 기술 스택

- **프론트엔드**: React 18, React Router DOM
- **백엔드**: Firebase (Authentication, Firestore, Storage)
- **스타일링**: CSS3, FontAwesome 아이콘
- **배포**: Vercel
- **빌드 도구**: Create React App

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── App.js          # 메인 앱 컴포넌트
│   ├── AuthForm.js     # 인증 폼
│   ├── Navigation.js   # 네비게이션 컴포넌트
│   ├── Nweet.js        # 개별 트윗 컴포넌트
│   ├── NweetFactory.js # 트윗 작성 컴포넌트
│   └── Router.js       # 앱 라우팅
├── routes/
│   ├── Auth.js         # 인증 페이지
│   ├── Home.js         # 홈 타임라인
│   └── Profile.js      # 사용자 프로필 페이지
├── fbase.js            # Firebase 설정
├── index.js            # 앱 진입점
└── styles.css          # 전역 스타일
```

## 📚 학습 목적
이 프로젝트는 다음을 학습하기 위해 만들어졌습니다:
- React Hooks 활용법
- Firebase와의 연동 방법
- 실시간 데이터베이스 구현
- 사용자 인증 시스템 구축
- 파일 업로드 및 저장 기능
- 반응형 웹 디자인

## 🔮 향후 개선 계획
- [ ] 댓글 기능 추가
- [ ] 좋아요 기능 구현
- [ ] 리트윗 기능 추가
- [ ] 다크 모드 지원
- [ ] 실시간 알림 기능
- [ ] 해시태그 기능
