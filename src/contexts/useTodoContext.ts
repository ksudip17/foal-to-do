import { useContext } from 'react';
import TodoContext from './TodoContext';

const useTodoContext = () => useContext(TodoContext);

export default useTodoContext;