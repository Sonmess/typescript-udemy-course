import { useRef, type FormEvent } from "react";

interface NewGoalProps {
  onAdd: (text: string, summary: string) => void 
}

export default function NewGoal({ onAdd }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;
    // validation ...

    onAdd(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </div>

      <div>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summaryRef} />
      </div>

      <div>
        <button>Add Goal</button>
      </div>
    </form>
  );
}
