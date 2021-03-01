import { Next, Request, Response } from "restify";
import { BadRequestError, NotFoundError } from "restify-errors";
import * as Achievements from "../database/achievements";

const Error = {
  NotInclude: (param: string) =>
    new BadRequestError(`Required parameter ${param} is not present`),

  NotFound: (id: string) =>
    new NotFoundError(`Request achievement ${id} is not found`),
};

export function getAll(req: Request, res: Response, next: Next) {
  const achievements = Achievements.getAll();

  res.send(achievements);

  return next();
}

export function getByID(req: Request, res: Response, next: Next) {
  if (!req.params.id) {
    res.send(Error.NotInclude("id"));

    return next();
  }

  const achievement = Achievements.getByID(req.params.id);

  if (!achievement) {
    res.send(Error.NotInclude(req.params.id));

    return next();
  }

  res.send(achievement);

  return next();
}
