// index.js

import MainMap from "@/components/mainmap.jsx";
export default function Home({ firs }) {
  return <MainMap firs={firs} />;
}

export async function getServerSideProps(context) {
  const Currentdate = new Date().getMonth() + 1;
  const month = Currentdate;
  const convert2digit = () => {
    if (parseInt(month) == 0) {
      return "";
    } else if (parseInt(month) < 10) {
      return `-0${month}-`;
    } else {
      return `-${month}-`;
    }
  };

  let a = await fetch(
    `${process.env.NEXT_PUBLIC_BHOST}/api/firs?filters[date][$contains]=${convert2digit()}`,
    {
      method: "GET",
    }
  );
  let firs = await a.json();

  return {
    props: { firs },
  };
}
