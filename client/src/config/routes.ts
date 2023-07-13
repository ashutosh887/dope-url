const urls = {
  HOME: "/",
  SHORT_ID: (shortId: string) => `/${shortId}`,
};

const routes = {
  HOME: urls.HOME,
  SHORT_ID: urls.SHORT_ID(":id"),
};

export default routes;
