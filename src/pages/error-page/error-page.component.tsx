import { useRouteError } from "react-router-dom";
import { RouteError } from "./error-page.types";



export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>
    </>
  );
}
