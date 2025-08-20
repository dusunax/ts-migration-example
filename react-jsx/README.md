# React JSX 프로젝트

## 📝 개요
- JavaScript + React + JSX로 구현된 사용자 관리 애플리케이션

## 📂 파일 구조
```
react-jsx/
├── src/
│   ├── components/
│   │   ├── UserForm.jsx     # 사용자 입력 폼 컴포넌트
│   │   └── UserList.jsx     # 사용자 목록 컴포넌트
│   ├── hooks/
│   │   └── useUser.js       # 사용자 관리 커스텀 훅
│   ├── App.jsx              # 메인 앱 컴포넌트
│   ├── App.css              # 스타일시트
│   └── main.jsx             # 앱 진입점
├── package.json
└── vite.config.js
```

## 🚀 실행 방법
```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5252` 접속

## 🚨 JavaScript + React의 한계

### 1. Props 타입 안전성 부족
```jsx
// 컴포넌트 Props - 타입 체크 없음
function UserForm({ onAddUser }) {
  // onAddUser가 함수인지 컴파일 시점에서 확인 불가
}
```

### 2. 상태 타입 불확실성
```javascript
const [users, setUsers] = useState([])
// users 배열의 각 요소 구조가 명확하지 않음
// user.name, user.email 등의 속성 존재 여부 불확실
```

### 3. 이벤트 핸들러 타입 안전성 부족
```jsx
const handleSubmit = (e) => {
  // e가 어떤 타입의 이벤트인지 명확하지 않음
  e.preventDefault()
}
```

### 4. IDE 지원 제한
- 자동완성 기능 제한적
- Props 구조 파악 어려움
- 리팩토링 시 안전성 보장 어려움

## 📊 실행 결과
- ⚠️ 타입 안전성 없음
- ⚠️ Props 검증 부족
- ⚠️ 런타임 오류 가능성

## 🎯 TypeScript (TSX)로 개선되는 점
1. **Props 타입 정의**: 컴포넌트 인터페이스 명확화
2. **상태 타입 안전성**: useState의 타입 추론
3. **이벤트 핸들러 타입**: 이벤트 객체 타입 보장
4. **커스텀 훅 타입**: 반환값과 매개변수 타입 정의
5. **IDE 완전 지원**: 자동완성, 타입 체크, 안전한 리팩토링

**다음 단계**: `../react-tsx/` 
