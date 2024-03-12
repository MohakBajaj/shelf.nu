import { useLocation, useRouteError } from "@remix-run/react";

import { isRouteError } from "~/utils/http";
import { Button } from "../shared";

export const ErrorContent = () => {
  const loc = useLocation();
  const response = useRouteError();

  let title = "Oops, something went wrong";
  let message =
    "There was an unexpected error. Please refresh to try again. If the issues persists, please contact support.";

  if (isRouteError(response)) {
    message = response.data.error.message;
    title = response.data.error.title || "Oops, something went wrong";
  }

  return (
    <div className="flex size-full items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <img src="/images/error-icon.svg" alt="" className="mb-5" />
        <h2 className="mb-2">{title}</h2>
        <p className="max-w-[550px]">{message}</p>

        <div className=" mt-8 flex gap-3">
          <Button to="/" variant="secondary" icon="home">
            Back to home
          </Button>
          <Button to={loc.pathname} reloadDocument>
            Reload page
          </Button>
        </div>
      </div>
    </div>
  );
};
