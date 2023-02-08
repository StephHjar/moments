import { rest } from "msw";

const baseURL = "https://steph-drf-api.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "garrus",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image:
          "https://res.cloudinary.com/donsobcrz/image/upload/v1/media/../default_profile_epyye4",
      })
    );
  }),
  rest.post(`${baseURl}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
