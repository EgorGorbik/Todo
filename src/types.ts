export type Todo = {
    text: string,
    complete: boolean,
    image?: File,
    audio?: string
}

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string, image?: File, audio?: string) => void;
