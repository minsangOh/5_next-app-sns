// HomeLayoutProps 인터페이스를 사용하여 children의 타입 선언
interface HomeLayoutProps {
  children: React.ReactNode;
}


// HomeLayoutProps에서 children 키에 해당하는 값 추출해서 사용. 구조분해 할당
export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div> 홈 레이아웃{children}</div>
  );
}
