import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../screens/Home/Home";
import Browse from "../../screens/Browse/Browse";
import CreatePost from "../../screens/CreatePost/CreatePost";
import EditPost from "../../screens/EditPost/EditPost";
import Profile from "../../screens/Profile/Profile";
import TeacherProfile from "../../screens/TeacherProfile/TeacherProfile";
import Layout from "../Layout/Layout";
import CreateCourse from "../../screens/CreateCourse/CreateCourse";
import CourseDetail from "../../screens/CourseDetail/CourseDetail";
import EditCourse from "../../screens/EditCourse/EditCourse";

const Main = ({ userData }) => {
  if (typeof userData === "undefined") {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home userData={userData} />
          </Route>
          <Route exact path="/browse">
            <Browse />
          </Route>
          <Route exact path="/new">
            <CreatePost userData={userData} />
          </Route>
          <Route exact path="/edit/:id">
            <EditPost userData={userData} />
          </Route>
          <Route exact path="/profile">
            <Profile userData={userData} />
          </Route>
          <Route exact path="/course/new">
            <CreateCourse userData={userData} />
          </Route>
          <Route exact path="/course/:id">
            <CourseDetail userData={userData} />
          </Route>
          <Route exact path="/course/:id/edit">
            <EditCourse userData={userData} />
          </Route>
          <Route exact path="/teacher/:id">
            <TeacherProfile userData={userData} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default Main;
