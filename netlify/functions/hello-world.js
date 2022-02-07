import { schedule } from "@netlify/functions";

export const handler = schedule("@hourly", (event, context) => {
  console.log("Received event:", event);

  return {
    statusCode: 200,
  };
});
