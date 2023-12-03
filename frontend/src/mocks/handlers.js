import { rest } from "msw";

const baseURL =
  "https://8080-thomastomo-devexchange-jefk3asfkvl.ws-eu106.gitpod.io/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "Admin",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image:
          "https://res.cloudinary.com/dtmyhmzcf/image/upload/v1/media/../default_profile_icon_dq1crk",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
