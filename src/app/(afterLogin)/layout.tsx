// afterLoginLayoutProps 인터페이스를 사용하여 children의 타입 선언
interface afterLoginLayoutProps {
  children: React.ReactNode;
}


// afterLoginLayoutProps children 키에 해당하는 값 추출해서 사용. 구조분해 할당
export default async function afterLoginLayout({ children }: afterLoginLayoutProps) {
  return (
    <div> 애프터 로그인 레이아웃{children}</div>
  );
}
