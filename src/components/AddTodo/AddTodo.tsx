import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

const AddTodo = ({ addTodo }: { addTodo: (title: string) => void }) => {
  const [formData, setFormData] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(title);
  };

  const handleSubmit = (e: FormEvent, formData: string | undefined) => {
    e.preventDefault();
    if (!formData) return;
    addTodo(formData);
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => handleSubmit(e, formData)}
      className="flex items-center justify-between border border-transparent border-b-zinc-600 px-4 py-3"
    >
      <input
        data-testid="title-input"
        ref={inputRef}
        className="w-max rounded-md border border-gray-400 px-4 py-2 text-white"
        type="text"
        placeholder="Введите текст"
        onChange={(e) => handleForm(e)}
      />
      <button
        data-testid="add-button"
        disabled={!inputRef.current?.value}
        type="submit"
        className="px-6 py-2 bg-blue-400 rounded-md enabled:hover:brightness-[85%] transition-all duration-200 disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        <span className="text-[#282828]">Добавить</span>
      </button>
    </form>
  );
};

export default AddTodo;
