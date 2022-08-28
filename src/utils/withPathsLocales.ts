import { GetStaticPathsResult } from "next";

const withPathsLocales = (
  paths: GetStaticPathsResult["paths"],
  locales: string[]
): GetStaticPathsResult["paths"] => {
  return paths
    .map((path) => {
      return locales.map((locale) => {
        const pathObj =
          typeof path === "string" ? { params: { slug: path } } : path;

        return {
          ...pathObj,
          locale,
        };
      });
    })
    .flat();
};

export default withPathsLocales;
