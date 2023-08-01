export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}


export type TodoFilter = 'all' | 'completed' | 'uncompleted';