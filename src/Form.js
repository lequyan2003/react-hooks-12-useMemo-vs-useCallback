import React from 'react'

export default React.memo(function Form({ submitForm, total }) {
    console.log('FORM RENDER');

    return (
    <>
        <div>Form</div>
        <p>Total: {total}</p>
        <input type='text' id='name' />
        <label htmlFor='name'>Name</label>
        <button onClick={submitForm}>Submit</button>
    </>
  );
});
