import NewProject from "./components/NewProject.jsx";
import NoprojectSelected from "./components/NoprojectSelected.jsx";
import Projectsidebar from "./components/Projectsidebar.jsx";
import React, { useState } from "react";
import SelectedProject from "./components/SelectedProjects.jsx";

function App() {
  const [projectstate, setprojectstate] = useState({
    selectedprojectid: undefined,
    projects: [],
    tasks: [],
  });

  function handleaddtask(text) {
    setprojectstate((prevstate) => {
      const taskid = Math.random();
      const newtask = {
        text: text,
        projectid: prevstate.selectedprojectid,
        id: taskid,
      };
      return {
        ...prevstate,
        tasks: [newtask, ...prevstate.tasks],
      };
    });
  }

  function handledeletetask(id) {
    setprojectstate((prevstate) => {
      return {
        ...prevstate,
        tasks: prevstate.tasks.filter((task) => task.id !== id),
      };
    });
  }
  function handleselectedproject(id) {
    setprojectstate((prevstate) => {
      return { ...prevstate, selectedprojectid: id };
    });
  }

  function handleproject() {
    setprojectstate((prevstate) => {
      return { ...prevstate, selectedprojectid: null };
    });
  }
  function handlestopproject() {
    setprojectstate((prevstate) => {
      return { ...prevstate, selectedprojectid: undefined };
    });
  }

  function handleaddproject(projectdata) {
    setprojectstate((prevstate) => {
      const projectid = Math.random();
      const newproject = { ...projectdata, id: projectid };
      return {
        ...prevstate,
        selectedprojectid: undefined,
        projects: [...prevstate.projects, newproject],
      };
    });
  }
  function handledeleteproject() {
    setprojectstate((prevstate) => {
      return {
        ...prevstate,
        selectedprojectid: undefined,
        projects: prevstate.projects.map(
          (project) => project.id !== prevstate.selectedprojectid
        ),
      };
    });
  }
  const selectedproject = projectstate.projects.find(
    (project) => project.id === projectstate.selectedprojectid
  );
  let content = (
    <SelectedProject
      project={selectedproject}
      ondelete={handledeleteproject}
      onaddtask={handleaddtask}
      ondeletetask={handledeletetask}
      tasks={projectstate.tasks}
    />
  );
  if (projectstate.selectedprojectid === null) {
    content = (
      <NewProject onadd={handleaddproject} oncancel={handlestopproject} />
    ); // Fix casing here
  } else if (projectstate.selectedprojectid === undefined) {
    content = <NoprojectSelected onstartaddproject={handleproject} />;
  }

  console.log(projectstate);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebar
        onstartaddproject={handleproject}
        projects={projectstate.projects}
        onselectedproject={handleselectedproject}
        selectedprojectid={projectstate.selectedprojectid}
      />
      {content}
    </main>
  );
}

export default App;
