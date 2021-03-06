import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursePage from "./components/course/CoursePage";
import ManageCoursePage from "./components/course/ManageCoursePage"; //eslint-disable-line import/no-named-as-default
import AuthorPage from "./components/author/AuthorPage";
import ManageAuthorPage from "./components/author/ManageAuthorPage";
import AuthorDisplay from "./components/author/AuthorDisplay";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursePage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="authors" component={AuthorPage} />
    <Route path="author" component={ManageAuthorPage} />
    <Route path="author/:id" component={ManageAuthorPage} />
    <Route path="authorTable" component={AuthorDisplay} />
    <Route path="authorTable/:id" component={AuthorDisplay} />
  </Route>
);
