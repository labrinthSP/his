import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col gap-y-5 justify-center items-center min-h-screen">
      <h1 className="text-xl lg:text-6xl font-bold">Oops!</h1>
      <p className="text-base lg:text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="text-base lg:text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}