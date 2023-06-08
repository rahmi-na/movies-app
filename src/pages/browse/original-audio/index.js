import TerlusuriBahasaPage from "@/modules/browse/Telusuri";
import nookies from "nookies";

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  if (!cookies.accessToken) {
    return {
      props: {
        auth: false,
      },
    };
  }

  return {
    props: {
      auth: true,
      // role: cookies.role
    },
  };
};

export default TerlusuriBahasaPage;
