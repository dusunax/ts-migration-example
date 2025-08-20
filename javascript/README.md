# 1️⃣ JavaScript 프로젝트

## 📝 개요
- 순수(vanilla) JavaScript로 작성된 사용자 관리 시스템 
- 타입 검사가 없어 런타임 에러가 발생할 수 있음

## 🗂️ 파일 구조
```
javascript/
├── src/
│   └── index.js        # 메인 실행 파일 (UserManager 클래스 포함)
├── package.json
└── README.md
```

## 📌 JavaScript의 문제점

### 1. 타입 안전성 부족
```javascript
// age에 문자열이 들어가도 컴파일 시점에서 감지 불가
const user = new User(1, "김철수", "kim@example.com", "25"); // ❌ 문자열 age
```

### 2. 매개변수 검증 부족
```javascript
// 필수 매개변수 누락 감지 어려움
const user = new User(1, "김철수"); // ❌ email, age 누락
```

### 3. IDE 지원 제한
- 자동완성 기능 제한적
- 리팩토링 시 안전성 보장 어려움  
- 객체 구조 파악 어려움

### 4. 런타임 에러 위험
```javascript
// null/undefined 체크 누락 시 런타임 에러
user.email.toLowerCase(); // ❌ email이 undefined일 경우 에러
```

## ✨ 실행 방법
```bash
npm install
npm run dev
```

## 📊 실행 결과
- ✅ 사용자 생성 및 관리
- ✅ 기본적인 CRUD 기능
- ⚠️ 타입 안전성 없음
- ⚠️ 런타임 에러 가능성

## 🎯 TypeScript로 개선되는 점
1. **컴파일 타임 타입 체크**: 잘못된 타입 사용 시 즉시 오류 감지
2. **인터페이스 정의**: 객체 구조 명확화
3. **향상된 IDE 지원**: 자동완성, 타입 정보, 안전한 리팩토링
4. **null/undefined 안전성**: 옵셔널 체이닝과 타입 가드

---

**다음 단계**: `../typescript/`