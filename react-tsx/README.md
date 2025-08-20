# React TSX 프로젝트

## 📝 개요
- JavaScript + React + TSX로 구현된 타입 안정성을 갖춘 사용자 관리 애플리케이션

## 📂 파일 구조
```
react-tsx/
├── src/
│   ├── components/
│   │   ├── UserForm.tsx     # 사용자 입력 폼
│   │   └── UserList.tsx     # 사용자 목록
│   ├── hooks/
│   │   └── useUser.ts       # 사용자 관리 커스텀 훅
│   ├── types/
│   │   └── User.ts          # 사용자 타입 정의
│   ├── App.tsx              # 메인 컴포넌트
│   ├── App.css              # 스타일시트
│   └── main.tsx             # 앱 진입점
├── tsconfig.json            # TypeScript 설정
├── package.json
└── vite.config.ts
```

## 🚀 실행 방법
```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5253` 접속

## 🎯 주요 개선사항

### 1. 컴파일 타임 오류 방지
```typescript
// ❌ 컴파일 에러!
<UserForm onAddUser="not a function" />
//                   ~~~~~~~~~~~~~~~~ 
// Error: Type 'string' is not assignable to type '(userData: UserFormData) => void'
```

### 2. 자동완성과 IntelliSense
- 모든 Props, 상태, 메서드에 대한 자동완성
- 타입 정보 실시간 표시
- 사용하지 않는 변수/함수 감지

### 3. 안전한 리팩토링
- 타입 변경 시 관련된 모든 코드 자동 업데이트
- 참조 추적 및 일괄 변경
- 런타임 오류 사전 방지

### 4. 향상된 개발자 경험
- 코드 작성 중 실시간 오류 감지
- 정확한 API 문서화 (타입이 문서 역할)
- 팀 협업 시 코드 의도 명확화

## 📊 JSX vs TSX 비교

| 기능 | React JSX | React TSX |
|------|-----------|-----------|
| **Props 검증** | 런타임 체크 | ✅ 컴파일 타임 |
| **상태 타입** | 추론 제한적 | ✅ 완전한 타입 |
| **이벤트 핸들러** | any 타입 | ✅ 정확한 타입 |
| **자동완성** | 제한적 | ✅ 완전 지원 |
| **리팩토링** | 위험 | ✅ 안전 |
| **오류 발견** | 런타임 | ✅ 개발 시점 |

## 🎯 특징
- ✅ 완전한 타입 안전성
- ✅ Props 타입 검증
- ✅ 상태 타입 보장
- ✅ 이벤트 핸들러 타입 정의
- ✅ IDE 완전 지원
- ✅ 컴파일 타임 오류 방지

**이전 단계**: `../react-jsx/`
