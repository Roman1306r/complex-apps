export interface HeaderProps {
    changeThemeApp: Function | any
    isLight: boolean
}



export interface TicTac {
    id: number
    content: string
}


//todo
export interface TodoProps {
    text: string
    id: number
    isCopmleted: boolean
}

export interface FormTodoProps {
    submitForm: Function | any
}

export interface TodosProps {
    todos: TodoProps[]
    removeTodo: Function | any
    clearTodos: Function | any
    toggleTodo: Function | any
    clearCompletedTodos: Function | any
}
export interface ButtonsTodosProps {
    clearTodos: Function | any
    clearCompletedTodos: Function | any
    disabled: boolean
}
export interface TodoComponentProps {
    removeTodo: Function | any
    text: string
    id: number
    toggleTodo: Function | any
    isCopmleted: boolean
}



//password
interface passwordValue {
    current: HTMLTitleElement | any 
}

export interface SettingsPassword {
    num: boolean
    special: boolean
    capital: boolean
}
export interface PasswordResultProps {
    lenghtPassword: number
    password: string
    passwordValue: passwordValue
    createPassword: Function | any
    settings: SettingsPassword
}
export interface PasswordSettingsProps {
    lenghtPassword: number
    setLenghtPassword: Function | any
    settings: SettingsPassword
    setSettings: Function | any
}



//product
export interface ProductProps {
    id: number
    title: string
    images: string[]
    price: number,
    brand: string
    description: string
    rating: number
    deleteProduct: Function | any
    toggleIsCart: Function | any
    isCart: boolean
}
export interface ProductsData {
    id: number
    title: string
    images: string[]
    price: number,
    brand: string
    description: string
    rating: number
    isCart: boolean
}
export interface BasketProps {
    setIsBasket: Function | any
    basket: ProductsData[]
    addProperty: Function | any
    toggleIsCart: Function | any
}


//bmi
export interface DatasBMI {
    id: number
    bmi: string
    title: string
}

export interface BMIResultProps {
    result: number
    equality: string
}
export interface BMIFormProps {
    setHeight: Function | any
    height: number
    setWeight: Function | any
    weight: number
    calculateBMI: () => void
}



//timer
export interface TimerSettingsProps {
    setSettings: Function | any
    currentOption: string
    setCurrentOption: Function | any
    timer: number
    setTimer: Function | any
    setDuration: Function | any
}
export interface TimerBodyProps {
    timer: number
    setTimer: Function | any
    setSettings: Function | any
    duration: number
}
export interface ICountdown {
    hours: number;
    minutes: number;
    seconds: number;
}





//calculator
export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Operator = '+' | '-' | '×' | '÷'



//tic tac toe
export interface TTTInfoProps {
    motion: string
    setMotion: Function | any
    motionCount: number
    isChange: boolean
    setIsChange: Function | any
    disabled: boolean
    setDisabled: Function | any
}
export interface TTTGameOverProps {
    setMotion: Function | any
    setMotionCount: Function | any
    setGameOver: Function | any
    winner: string
    setWinner: Function | any
    setIsChange: Function | any
    setDisabled: Function | any
}
export interface TTTFieldProps {
    motion: string
    setMotion: Function | any
    motionCount: number
    setMotionCount: Function | any
    setGameOver: Function | any
    setWinner: Function | any
}
export interface FieldTTT {
    id: number
    content: string
}
export interface CellProps {
    content: string
    setMotion: Function | any
    setFields: Function | any
    id: number
    motion: string
    motionCount: number
    setMotionCount: Function | any
    setGameOver: Function | any
    checkWinner: Function | any
    fields: FieldTTT[]
}