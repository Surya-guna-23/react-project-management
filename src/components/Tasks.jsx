import Newtask from "./Newtask";

export default function Tasks({ tasks, onadd, ondelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">
        <Newtask onadd={onadd} ondelete={ondelete} />
        {tasks.length === 0 && (
          <p className="text-stone-800 mb-4">
            this project does not have any task yet
          </p>
        )}
      </h2>

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-sm bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between  my-4">
              <span>{task.text}</span>
              <button
                onClick={() => ondelete(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
