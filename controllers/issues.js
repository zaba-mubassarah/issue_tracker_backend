import { v4 as uuid } from "uuid";
let issues = [];
export const getIssues = (req, res) => {
  res.send(issues);
};
export const getIssuesById = (req, res) => {
  const { id } = req.params;
  const dataById = issues.find((item) => item.id === id);
  res.send(dataById);
};
export const saveIssues = (req, res) => {
  console.log("req,", req);
  const request = req.body;
  issues.push({ ...request, id: uuid() });
  res.send(issues);
};

export const deleteIssue = (req, res) => {
  const { id } = req.params;

  issues = issues.filter((item) => {
    return item.id !== id;
  });

  res.send(`issues of id ${id} is deleted`);
};

export const updateIssue = (req, res) => {
  const issue = issues.find((issue) => issue.id === req.params.id);
  issue.title = req.body.title;
  issue.description = req.body.description;
  issue.module = req.body.module;

  res.send(issues);
};
