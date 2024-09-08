import { JetPath } from "jetpath";
const app = new JetPath({
    apiDoc: {
        color: "#477fcf",
        name: "Zteller API doc",
        logo: "https://avatars.githubusercontent.com/u/171146212?s=200&v=4",
        path: "/zteller-api-design",
        info: "A payment gateway for student to pay there school dues.",
    },
    APIdisplay: "UI",
    cors: true,
    globalHeaders: { "x-zteller-token": "" },
});
app.listen();
export const GET_api_v1_entities = (ctx) => {
    ctx.send("hello");
};
export const GET_api_v1_dues_pay = (ctx) => {
    ctx.send("hello");
};
