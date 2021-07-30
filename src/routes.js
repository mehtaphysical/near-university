import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import Lesson from "./components/Lesson";

export default [
  { path: "/", component: HomePage },
  {
    path: "/courses/:id",
    component: CoursePage,
    children: [{ path: "lessons/:title", component: Lesson }],
  },
];
