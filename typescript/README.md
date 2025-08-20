# 2️⃣ TypeScript 프로젝트

## 📝 개요
- JavaScript 코드를 TypeScript로 마이그레이션한 버전
- 타입 안전성, 개발 경험 향상

## 📂 파일 구조
```
typescript/
├── src/
│   └── index.ts        # 메인 실행 파일 (타입이 추가된 UserManager 클래스)
├── tsconfig.json       # TypeScript 컴파일러 설정
├── package.json
└── README.md
```

## 📌 TypeScript의 개선사항

### 1. 컴파일 타임 타입 체크
```typescript
// ❌ 컴파일 에러 발생!
const user = new User(1, "김철수", "kim@example.com", "25");
//                                                     ~~~~ 
// Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

### 2. 명확한 인터페이스 정의
```typescript
// User 인터페이스
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}

// User 인터페이스를 활용한 유틸리티 타입
type UserUpdate = Partial<Pick<User, 'name' | 'email' | 'age'>>; 
```

### 3. 향상된 메서드 타입 안전성
```typescript
getUserById(id: User['id']): User | null {
  // User의 타입이 변경되면 메서드 타입에도 적용됨
  // 반환 타입이 명확하게 정의됨
  // null 안정성
}

getUsersByAge(minAge: number, maxAge: number): User[] {
  // 매개변수와 반환값 타입 보장
}
```

### 4. 반환 타입 명시
```typescript
getUserStatistics(): { total: number; averageAge: number; ageRange: { min: number; max: number } }  {
  // any가 아닌 명시된 반환 타입
  // IDE 자동완성 지원
}
```

## ✨ 실행 방법
```bash
npm install
npm run dev
```

## 📊 JavaScript 대비 개선점

| 기능 | JavaScript | TypeScript |
|------|------------|------------|
| **타입 안전성** | ❌ 런타임 체크 | ✅ 컴파일 타임 체크 |
| **IDE 지원** | 제한적 | ✅ 완전한 자동완성 |
| **리팩토링** | 위험 | ✅ 안전한 리팩토링 |
| **에러 발견** | 런타임 | ✅ 개발 시점 |
| **코드 문서화** | 주석 의존 | ✅ 타입이 문서 역할 |

### Before (JavaScript)
- 런타임 에러 가능성
- IDE 지원 제한적
- 리팩토링 시 위험성
- 코드 의도 파악 어려움

### After (TypeScript)
- 컴파일 타임 오류 감지
- 풍부한 IDE 지원 (자동완성, 타입 정보)
- 안전한 리팩토링
- 명확한 코드 의도 표현

## 🎯 주요 학습 포인트

1. **인터페이스 정의**: 객체의 구조를 명확히 정의
2. **함수 타입 시그니처**: 매개변수와 반환값의 타입 지정
3. **제네릭 활용**: 재사용 가능한 타입 안전 코드
4. **타입 가드**: 런타임에서의 타입 체크
5. **유틸리티 타입**: `Omit`, `Pick`, `Partial` 등 활용

## 💡 추천

1. **점진적 타입 추가**: `any` 타입부터 시작해서 점차 구체적인 타입으로
2. **인터페이스 우선**: 객체 구조는 인터페이스로 정의
3. **제네릭 활용**: 재사용성을 위한 제네릭 함수/클래스
4. **타입 가드 사용**: 안전한 타입 체크
