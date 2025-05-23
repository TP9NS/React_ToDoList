import './TodoListTemplate.css';
import PropTypes from 'prop-types';
const TodoListTemplate = ({ form, children }) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘의 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};
TodoListTemplate.propTypes = {
    form : PropTypes.element,
    children : PropTypes.node
}
export default TodoListTemplate;
