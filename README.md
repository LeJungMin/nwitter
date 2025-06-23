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

## 📦 설치 방법

1. 저장소를 클론합니다:
```bash
git clone https://github.com/LeJungMin/nwitter.git
cd nwitter
```

2. 의존성을 설치합니다:
```bash
npm install
```

3. Firebase 설정:
   - [https://console.firebase.google.com/](https://console.firebase.google.com/)에서 Firebase 프로젝트 생성
   - 프로젝트에 웹 앱 추가
   - `src/fbase.js` 파일에 Firebase 설정 정보 업데이트

4. 개발 서버를 실행합니다:
```bash
npm start
```

## 🔧 사용 가능한 스크립트

### `npm start`
개발 모드로 앱을 실행합니다. [http://localhost:3000](http://localhost:3000)에서 확인 가능합니다.

### `npm run build`
프로덕션용으로 앱을 `build` 폴더에 빌드합니다.

### `npm test`
대화형 감시 모드에서 테스트 실행기를 시작합니다.

## 🌐 배포

이 프로젝트는 Vercel에 자동으로 배포됩니다. main 브랜치에 푸시할 때마다 새로운 배포가 실행됩니다.

직접 배포하려면:
1. 이 저장소를 포크합니다
2. [Vercel](https://vercel.com/)에 가입합니다
3. 포크한 저장소를 가져옵니다
4. 기본 설정으로 배포합니다

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

## 🤝 기여하기

1. 프로젝트를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/새로운기능`)
3. 변경사항을 커밋합니다 (`git commit -m '새로운 기능 추가'`)
4. 브랜치에 푸시합니다 (`git push origin feature/새로운기능`)
5. Pull Request를 작성합니다

## 📝 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 오픈소스로 제공됩니다.

## 👤 작성자

**이정민 (LeJungMin)**
- GitHub: [@LeJungMin](https://github.com/LeJungMin)

## 🙏 감사 인사

- 트위터의 사용자 인터페이스와 기능에서 영감을 받았습니다
- React 모범 사례를 따라 구축되었습니다
- 훌륭한 백엔드 서비스를 제공해준 Firebase에 감사드립니다
- 초기 프로젝트 설정을 위한 Create React App에 감사드립니다

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
