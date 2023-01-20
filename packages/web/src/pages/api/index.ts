import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";

const hello = (_ : NextApiRequest, res: NextApiResponse) => {
    res.redirect("/");
}

export default hello;
