import { NextApiRequest, NextApiResponse } from "next";

const hello = (_ : NextApiRequest, res: NextApiResponse) => {
    res.redirect("/");
}

export default hello;
