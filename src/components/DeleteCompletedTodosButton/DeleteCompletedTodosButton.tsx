import React from 'react';

const DeleteCompletedTodosButton = ({ deleteCompletedTodos }: { deleteCompletedTodos: () => void }) => {
  return (
    <button onClick={deleteCompletedTodos}>
    <span>Удалить завершенные</span>
  </button>
  )
}

export default DeleteCompletedTodosButton