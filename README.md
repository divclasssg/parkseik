# parkseik

[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)으로 생성한 [Next.js](https://nextjs.org) 프로젝트입니다.

## 기술 스택

- **Next.js** 16.2.6 (App Router)
- **React** 19.2.4
- **ESLint** 9 (`eslint-config-next`)
- **React Compiler** (`babel-plugin-react-compiler`)

## 시작하기

먼저 개발 서버를 실행합니다.

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 결과를 확인하세요.

`src/app/page.js` 파일을 수정하면 페이지를 편집할 수 있습니다. 파일을 저장하면 페이지가 자동으로 갱신됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용해 Vercel이 만든 새 글꼴 [Geist](https://vercel.com/font)를 자동으로 최적화하여 로드합니다.

## 사용 가능한 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run start` | 빌드된 결과물로 서버 실행 |
| `npm run lint` | ESLint 검사 |

## 프로젝트 구조

```
.
├── public/            # 정적 자산 (이미지, 아이콘 등)
├── src/
│   └── app/           # App Router 라우트와 레이아웃
├── eslint.config.mjs  # ESLint 설정
├── next.config.mjs    # Next.js 설정
└── package.json
```

## 더 알아보기

Next.js를 더 알아보려면 아래 자료를 참고하세요.

- [Next.js 공식 문서](https://nextjs.org/docs) — Next.js의 기능과 API를 다룹니다.
- [Learn Next.js](https://nextjs.org/learn) — 대화형 Next.js 튜토리얼입니다.
- [Next.js GitHub 저장소](https://github.com/vercel/next.js) — 피드백과 기여를 환영합니다.

## Vercel에 배포하기

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js 제작자들이 만든 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참고하세요.
