import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AllCourses from "../components/all_courses/AllCourses";
import Overveiw from "../components/course_item_overview/Overveiw";
import QuizComponent from "../components/quiz/QuizComponent";
import SyllabusComponent from "../components/syllabus/SyllabusComponent";
import UserAccountComponent from "../components/user_account/UserAccountComponent";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/syllabus" element={<SyllabusComponent />} />
        <Route path="/overveiw" element={<Overveiw />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/user-account" element={<UserAccountComponent />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
