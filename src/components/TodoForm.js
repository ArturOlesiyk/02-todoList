import React, {useState} from "react"
import {Field, Formik} from "formik";

export const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')


    return <Formik
        initialValues={{text: input}}
        validate={(values) => {
            const errors = {};
            if (values.text.length > 50) {
                errors.text = 'Too long!';
            }
            return errors;
        }}
        onSubmit={(values, {resetForm}) => {
            props.onSubmitTodo({
                id: Math.floor(Math.random() * 10000),
                text: values.text
            })
            resetForm({})
        }}
    >
        {({
              errors,
              touched,
              handleBlur,
              handleSubmit
          }) => (
            <form onSubmit={handleSubmit}
                  className='todo-form'>
                {props.edit ?
                    <>
                        <Field
                            type="text"
                            name="text"
                            onBlur={handleBlur}
                            placeholder={"Update your todo..."}
                            autoComplete={'off'}
                            autoFocus={true}
                            className='todo-input edit'
                        />
                        <button type="submit"
                                className='todo-button'>
                            Update
                        </button>
                        {errors.text && touched.text ?
                            <div className='todo-validate-Field'>{errors.text}</div> : null}
                    </> : <>
                        <Field
                            type="text"
                            name="text"
                            onBlur={handleBlur}
                            placeholder={"Enter your todo..."}
                            className='todo-input'
                            autoComplete={'off'}
                            autoFocus={true}
                        />
                        <button type="submit"
                                className='todo-button'>
                            Add Todo
                        </button>
                        {errors.text && touched.text ?
                            <div className='todo-validate-Field'>{errors.text}</div> : null}
                    </>
                }
            </form>
        )}
    </Formik>
}