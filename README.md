# 🚀 TypeScript Migration Example

JavaScript에서 TypeScript로의 마이그레이션 과정을 보여주는 실습 프로젝트 예제 모음입니다.

## 📁 프로젝트 구조

각 폴더는 독립적인 프로젝트로 구성되어 있습니다.

```
ts-migration-example/
├── javascript/          # 1️⃣ 순수 JavaScript 프로젝트
├── typescript/          # 2️⃣ TypeScript 마이그레이션
├── react-jsx/           # 3️⃣ React + JSX 프로젝트
├── react-tsx/           # 4️⃣ React + TypeScript (TSX)
└── README.md            # 현재 파일
```

## 🎯 목표

- JavaScript에서 TypeScript로 프로젝트를 마이그레이션하는 예시를 코드로 이해
- 타입 안전성의 이점 체험

## 마이그레이션 단계

### 1️⃣ JavaScript (기본)
- **위치**: `./javascript/`
- **기술 스택**: Vanilla JavaScript, ES6+
- **특징**: 
  - 클래스 기반 사용자 관리 시스템
  - 기본적인 CRUD 기능
  - 타입 검사 없음

**실행 방법:**
```bash
cd javascript
npm install
npm run dev
```

### 2️⃣ TypeScript (마이그레이션)
- **위치**: `./typescript/`
- **기술 스택**: TypeScript
- **특징**:
  - JavaScript 코드에 타입 추가
  - 인터페이스와 타입 정의
  - 컴파일 시점에 타입 검사
  - 향상된 IDE 지원

**실행 방법:**
```bash
cd typescript
npm install
npm run dev
```

**주요 개선사항:**
- `User`, `UserUpdate` 인터페이스 정의
- 메서드 매개변수와 반환값에 타입 지정
- `null`/`undefined` 안전성 향상
- 타입 기반 자동완성

### 3️⃣ React + JSX
- **위치**: `./react-jsx/`
- **기술 스택**: React 18, JSX, JavaScript
- **특징**:
  - 컴포넌트 기반 UI 구조
  - React Hooks 사용
  - 사용자 상호작용
  - Props를 통한 데이터 전달

**실행 방법:**
```bash
cd typescript
npm install
npm run dev
```

**컴포넌트 구조:**
- `App.jsx` - 메인 애플리케이션
- `UserForm.jsx` - 사용자 입력 폼
- `UserList.jsx` - 사용자 목록 및 편집

### 4️⃣ React + TypeScript (TSX)
- **위치**: `./react-tsx/`
- **기술 스택**: React 18, TypeScript, TSX
- **특징**:
  - 모든 컴포넌트에 타입 정의
  - Props 타입 안전성
  - 이벤트 핸들러 타입 지정
  - 상태 관리 타입 안전성

**실행 방법:**
```bash
cd typescript
npm install
npm run dev
```

**TypeScript 특징:**
- `User`, `UserFormData` 인터페이스
- 컴포넌트 Props 타입 정의
- 이벤트 핸들러 타입 안전성
- `useState`와 `useEffect`의 타입 추론

## 🛠️ 마이그레이션 전략

### 단계별 접근법

1. **점진적 도입**: JavaScript 파일을 하나씩 `.ts`로 변환
2. **라이브러리 타입**: `@types/*` 패키지 설치
3. **타입 추가**: 기본 타입부터 시작해서 점진적으로 복잡한 타입 추가
4. **엄격성 증가**: `strict` 모드 활성화, `any` 및 자바스크립트 파일 제거

### 실무 팁

- **tsconfig.json 설정**: 프로젝트에 맞는 컴파일러 옵션 선택
- **점진적 마이그레이션**: `allowJs: true`로 시작
- **타입 정의**: 공통 타입은 별도 파일로 분리

## 🚀 실습 가이드

### 1. 환경 설정
각 프로젝트 폴더에서 의존성을 설치합니다..

### 2. 순서대로 실행
1. `javascript` 프로젝트로 기본 동작 확인
2. `typescript` 프로젝트로 타입 추가의 이점 확인
3. `react-jsx` 프로젝트로 React 컴포넌트 구조 이해
4. `react-tsx` 프로젝트로 React + TypeScript 조합 체험

### 3. 코드 비교
동일 기능을 구현한 프로젝트 간의 코드를 비교해보세요:
- 타입 정의의 명확성
- IDE의 자동완성 차이
- 에러 처리 방식의 차이
- 개발자 경험의 향상

## 📚 추가 학습 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 🎉 Happy Learning! 
이 프로젝트는 마이그레이션의 필요성과 장점을 전달하고, 기본적인 프로젝트 설정을 위한 학습 목적으로 만들어졌습니다. 개선사항이나 추가 예제가 있다면  기여해주세요!

| 구분 | Javascript | Typescript |
| --- | ---------- | ---------- |
| **코드 품질** | 수동 검증 | ✅ 자동 타입 검증 |
| **유지보수** | 어려움 | ✅ 쉬움 |
| **개발 속도** | 초기 빠름 | ✅ 장기적으로 빠름 |
---
