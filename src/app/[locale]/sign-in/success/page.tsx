import { getTranslations } from "next-intl/server";

const Succes = async () => {
  const t = await getTranslations("authentication");

  return <h1>{t("signUpSucces")}</h1>;
};

export default Succes;
